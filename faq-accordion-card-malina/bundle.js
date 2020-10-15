(function () {
    'use strict';

    let __app_onerror = console.error;

    function $watch(cd, fn, callback, w) {
        if(!w) w = {};
        w.fn = fn;
        w.cb = callback;
        if(!('value' in w)) w.value = NaN;
        cd.watchers.push(w);
        return w;
    }
    function $watchReadOnly(cd, fn, callback) {
        return $watch(cd, fn, callback, {ro: true});
    }

    function addEvent(cd, el, event, callback) {
        el.addEventListener(event, callback);
        cd_onDestroy(cd, () => {
            el.removeEventListener(event, callback);
        });
    }
    function cd_onDestroy(cd, fn) {
        cd.destroyList.push(fn);
    }
    function $$removeItem(array, item) {
        let i = array.indexOf(item);
        if(i>=0) array.splice(i, 1);
    }
    function $ChangeDetector(parent) {
        this.parent = parent;
        this.children = [];
        this.watchers = [];
        this.destroyList = [];
        this.prefix = [];
    }
    $ChangeDetector.prototype.new = function() {
        var cd = new $ChangeDetector(this);
        this.children.push(cd);
        return cd;
    };

    $ChangeDetector.prototype.destroy = function(option) {
        if(option !== false && this.parent) $$removeItem(this.parent.children, this);
        this.watchers.length = 0;
        this.prefix.length = 0;
        this.destroyList.forEach(fn => {
            try {
                fn();
            } catch (e) {
                __app_onerror(e);
            }
        });
        this.destroyList.length = 0;
        this.children.forEach(cd => {
            cd.destroy(false);
        });
        this.children.length = 0;
    };


    const isArray = (a) => Array.isArray(a);

    const compareArray = (a, b) => {
        let a0 = isArray(a);
        let a1 = isArray(b);
        if(a0 !== a1) return true;
        if(!a0) return a !== b;
        if(a.length !== b.length) return true;
        for(let i=0;i<a.length;i++) {
            if(a[i] !== b[i]) return true;
        }
        return false;
    };


    function $$compareArray(w, value) {
        if(!compareArray(w.value, value)) return 0;
        if(isArray(value)) w.value = value.slice();
        else w.value = value;
        w.cb(w.value);
        return w.ro ? 0 : 1;
    }

    const compareDeep = (a, b, lvl) => {
        if(lvl < 0) return false;
        if(!a || !b) return a !== b;
        let o0 = typeof(a) == 'object';
        let o1 = typeof(b) == 'object';
        if(!(o0 && o1)) return a !== b;

        let a0 = isArray(a);
        let a1 = isArray(b);
        if(a0 !== a1) return true;

        if(a0) {
            if(a.length !== b.length) return true;
            for(let i=0;i<a.length;i++) {
                if(compareDeep(a[i], b[i], lvl-1)) return true;
            }
        } else {
            let set = {};
            for(let k in a) {
                if(compareDeep(a[k], b[k])) return true;
                set[k] = true;
            }
            for(let k in b) {
                if(set[k]) continue;
                return true;
            }
        }

        return false;
    };

    function cloneDeep(d, lvl) {
        if(lvl < 0) return;
        if(!d) return d;

        if(typeof(d) == 'object') {
            if(d instanceof Date) return d;
            if(isArray(d)) return d.map(i => cloneDeep(i, lvl-1));
            let r = {};
            for(let k in d) r[k] = cloneDeep(d[k], lvl-1);
            return r;
        }
        return d;
    }
    const $$cloneDeep = function(d) {
        return cloneDeep(d, 10);
    };

    function $$deepComparator(depth) {
        return function(w, value) {
            if(!compareDeep(w.value, value, depth)) return 0;
            w.value = cloneDeep(value, depth);
            w.cb(value);
            return w.ro ? 0 : 1;
        };
    }
    const $$compareDeep = $$deepComparator(10);

    function $digest($cd) {
        let loop = 10;
        let w;
        while(loop >= 0) {
            let changes = 0;
            let index = 0;
            let queue = [];
            let i, value, cd = $cd;
            while(cd) {
                for(i=0;i<cd.prefix.length;i++) cd.prefix[i]();
                for(i=0;i<cd.watchers.length;i++) {
                    w = cd.watchers[i];
                    value = w.fn();
                    if(w.value !== value) {
                        if(w.cmp) {
                            changes += w.cmp(w, value);
                        } else {
                            w.value = value;
                            if(!w.ro) changes++;
                            w.cb(w.value);
                        }
                    }
                }            if(cd.children.length) queue.push.apply(queue, cd.children);
                cd = queue[index++];
            }
            loop--;
            if(!changes) break;
        }
        if(loop < 0) console.error('Infinity changes: ', w);
    }

    let templatecache = {false: {}, true: {}, svg: {}};

    let $$uniqIndex = 1;

    const $$childNodes = 'childNodes';

    function $$htmlToFragment(html, lastNotTag) {
        lastNotTag = !!lastNotTag;
        if(templatecache[lastNotTag][html]) return templatecache[lastNotTag][html].cloneNode(true);

        let t = document.createElement('template');
        t.innerHTML = html;
        let result = t.content;
        if(lastNotTag && result.lastChild.nodeType == 8) result.appendChild(document.createTextNode(''));
        templatecache[lastNotTag][html] = result.cloneNode(true);
        return result;
    }
    function $$htmlToFragmentClean(html, lastNotTag) {
        lastNotTag = !!lastNotTag;
        if(templatecache[lastNotTag][html]) return templatecache[lastNotTag][html].cloneNode(true);
        let result = $$htmlToFragment(html, lastNotTag);
        let it = document.createNodeIterator(result, 128);
        let n;
        while(n = it.nextNode()) {
            if(!n.nodeValue) n.parentNode.replaceChild(document.createTextNode(''), n);
        }    templatecache[lastNotTag][html] = result.cloneNode(true);
        return result;
    }
    function $$removeElements(el, last) {
        let next;
        while(el) {
            next = el.nextSibling;
            el.remove();
            if(el == last) break;
            el = next;
        }
    }

    let _tick_list = [];
    let _tick_planned = {};
    function $tick(fn, uniq) {
        if(uniq) {
            if(_tick_planned[uniq]) return;
            _tick_planned[uniq] = true;
        }
        _tick_list.push(fn);
        if(_tick_planned.$tick) return;
        _tick_planned.$tick = true;
        setTimeout(() => {
            _tick_planned = {};
            let list = _tick_list;
            _tick_list = [];
            list.forEach(fn => {
                try {
                    fn();
                } catch (e) {
                    __app_onerror(e);
                }
            });
        }, 0);
    }
    function $$makeProp($component, $props, bound, name, getter, setter) {
        let value = $props[name];
        if(value !== void 0) setter(value);
        if((bound[name] || bound.$$spreading) && (bound[name] !== 2)) $component.push.push(() => setter($props[name]));
        $component.exportedProps[name] = true;

        Object.defineProperty($component, name, {
            get: getter,
            set: setter
        });
    }

    function $$groupCall(emit) {
        let id = `gc${$$uniqIndex++}`;
        const fn = function() {
            $tick(() => {
                fn.emit && fn.emit();
            }, id);
        };
        fn.emit = emit;
        return fn;
    }
    function $$makeApply($cd) {
        let id = `a${$$uniqIndex++}`;
        return function apply() {
            if(apply._p) return;
            $tick(() => {
                try {
                    apply._p = true;
                    $digest($cd);
                } finally {
                    apply._p = false;
                }
            }, id);
        };
    }

    function $$makeComponent($element, $option) {
        let $component = {
            $cd: new $ChangeDetector(),
            exportedProps: {},
            push: []
        };

        $component.destroy = () => $component.$cd.destroy();
        $component.$$render = (rootTemplate) => {
            if ($option.afterElement) {
                $element.parentNode.insertBefore(rootTemplate, $element.nextSibling);
            } else {
                $element.innerHTML = '';
                $element.appendChild(rootTemplate);
            }
        };

        return $component;
    }
    const autoSubscribe = (cd, apply, obj) => {
        if(obj && 'value' in obj && obj.subscribe) {
            let unsub = obj.subscribe(apply);
            if(typeof unsub == 'function') cd_onDestroy(unsub);
        }
    };

    function $$componentCompleteProps($component, $$apply, $props) {
        let list = $component.push;
        let recalcAttributes, $attributes = $props;
        $component.push = () => {
            list.forEach(fn => fn());
            recalcAttributes();
            $$apply();
        };

        $attributes = {};
        for(let k in $props) {
            if(!$component.exportedProps[k]) {
                $attributes[k] = $props[k];
                recalcAttributes = 1;
            }
        }
        if(recalcAttributes) {
            recalcAttributes = () => {
                for(let k in $attributes) $attributes[k] = $props[k];
            };
        } else recalcAttributes = () => {};

        return $attributes;
    }

    const addStyles = (id, content) => {
        if(document.head.querySelector('style#' + id)) return;
        let style = document.createElement('style');
        style.id = id;
        style.innerHTML = content;
        document.head.appendChild(style);
    };


    const bindClass = (cd, element, fn, className) => {
        $watchReadOnly(cd, fn, value => {
            if(value) element.classList.add(className);
            else element.classList.remove(className);
        });
    };


    const bindText = (cd, element, fn) => {
        $watchReadOnly(cd, fn, value => {
            element.textContent = value;
        });
    };

    function $$eachBlock($parentCD, label, onlyChild, fn, getKey, itemTemplate, bind) {
        let $cd = $parentCD.new();

        let mapping = new Map();
        let lineArray = [];
        let lastNode;
        let tplLength = itemTemplate.childNodes.length;
        if(onlyChild) while(label.firstChild) label.firstChild.remove(); // FIXME

        $watch($cd, fn, (array) => {
            if(!array) array = [];
            if(typeof(array) == 'number') {
                lineArray.length = array;
                array--;
                while(array >= 0 && !lineArray[array]) lineArray[array] = array-- + 1;
                array = lineArray;
            } else if(!isArray(array)) array = [];

            let newMapping = new Map();
            let prevNode, parentNode;
            if(onlyChild) {
                prevNode = null;
                parentNode = label;
            } else {
                prevNode = label;
                parentNode = label.parentNode;
            }

            if(mapping.size) {
                let ctx, count = 0;
                for(let i=0;i<array.length;i++) {
                    ctx = mapping.get(getKey(array[i], i));
                    if(ctx) {
                        ctx.a = true;
                        count++;
                    }
                }

                if(!count && lastNode) {
                    if(onlyChild) label.textContent = '';
                    else $$removeElements(label.nextSibling, lastNode);
                    $cd.children.forEach(cd => cd.destroy(false));
                    $cd.children.length = 0;
                    mapping.clear();
                } else {
                    $cd.children = [];
                    mapping.forEach(ctx => {
                        if(ctx.a) {
                            ctx.a = false;
                            $cd.children.push(ctx.cd);
                            return;
                        }
                        $$removeElements(ctx.first, ctx.last);
                        ctx.cd.destroy(false);
                    });
                }
            }

            let i, item, next_ctx, ctx, nextEl;
            for(i=0;i<array.length;i++) {
                item = array[i];
                if(next_ctx) {
                    ctx = next_ctx;
                    next_ctx = null;
                } else ctx = mapping.get(getKey(item, i));
                if(ctx) {
                    nextEl = i == 0 && onlyChild ? parentNode.firstChild : prevNode.nextSibling;
                    if(nextEl != ctx.first) {
                        let insert = true;

                        if(tplLength == 1 && (i + 1 < array.length) && prevNode.nextSibling) {
                            next_ctx = mapping.get(getKey(array[i + 1], i + 1));
                            if(prevNode.nextSibling.nextSibling === next_ctx.first) {
                                parentNode.replaceChild(ctx.first, prevNode.nextSibling);
                                insert = false;
                            }
                        }

                        if(insert) {
                            let insertBefore = prevNode.nextSibling;
                            let next, el = ctx.first;
                            while(el) {
                                next = el.nextSibling;
                                parentNode.insertBefore(el, insertBefore);
                                if(el == ctx.last) break;
                                el = next;
                            }
                        }
                    }
                    ctx.rebind(i, item);
                } else {
                    let tpl = itemTemplate.cloneNode(true);
                    let childCD = $cd.new();
                    ctx = {cd: childCD};
                    bind(ctx, tpl, item, i);
                    ctx.first = tpl.firstChild;
                    ctx.last = tpl.lastChild;
                    parentNode.insertBefore(tpl, prevNode && prevNode.nextSibling);
                }
                prevNode = ctx.last;
                newMapping.set(getKey(item, i), ctx);
            }        lastNode = prevNode;
            mapping.clear();
            mapping = newMapping;
        }, {ro: true, cmp: $$compareArray});
    }

    function Faq($element, $option) {
      if (!$option) $option = {};
      if (!$option.events) $option.events = {};
      const $props = $option.props || ({});
      const $component = $$makeComponent($element, $option);
      const $$apply = $$makeApply($component.$cd);
      let $class = $option.$class;
      let question = 'default question';
      $$makeProp($component, $props, $option.boundProps || ({}), 'question', () => question, _question => {
        question = _question;
        $$apply();
      });
      let answer = 'default answer';
      $$makeProp($component, $props, $option.boundProps || ({}), 'answer', () => answer, _answer => {
        answer = _answer;
        $$apply();
      });
      let opened = false;
      $$makeProp($component, $props, $option.boundProps || ({}), 'opened', () => opened, _opened => {
        opened = _opened;
        $$apply();
      });
      let id = 0;
      $$makeProp($component, $props, $option.boundProps || ({}), 'id', () => id, _id => {
        id = _id;
        $$apply();
      });
      let $attributes = $$componentCompleteProps($component, $$apply, $props);
      
            return (function() {
                let $cd = $component.$cd;
        
    function $$build3($cd, $parentElement) {
    const el0 = $parentElement[$$childNodes][1];
    const el1 = el0[$$childNodes][0][$$childNodes][0];
    const el2 = el0[$$childNodes][2][$$childNodes][0];

                        addEvent($cd, el0, "click", ($event) => {
                            const fn = $option.events.click;
                            if(fn) fn($event);
                        });

    bindClass($cd, el0, () => !!(opened), 'opened');
    {
                            let $element=el0;
                            $watchReadOnly($cd, () => ((id)), (value) => {
                                if(value != null) $element.setAttribute('data-id', value);
                                else $element.removeAttribute('data-id');
                            });
                        }
    bindText($cd, el1, () => (question));
    bindText($cd, el2, () => (answer));}const rootTemplate = $$htmlToFragmentClean(` <div class="mr77ygt faq"><p class="mr77ygt faq__question t-question"> </p> <p class="mr77ygt faq__answer t-answer"> </p></div> `);

            $$build3($cd, rootTemplate);
            $component.$$render(rootTemplate);
        

            addStyles('mr77ygt', `.faq.mr77ygt{width:100%;cursor:pointer;padding-bottom:1.6rem;border-bottom:1px solid var(--color-light-gray)}.faq.mr77ygt:not(:first-of-type){margin-top:1.7rem}@media (min-width:1024px){.faq.mr77ygt{padding-right:1.6rem}}.faq__question.mr77ygt{outline:none;transition:var(--transition) color}.faq.mr77ygt:hover>.faq__question.mr77ygt{color:var(--color-soft-red)}.faq__question.mr77ygt{display:flex;align-items:center;justify-content:space-between}.faq__question.mr77ygt::after{content:'';width:1rem;height:.7rem;background-size:contain;background-repeat:no-repeat;background-image:url(./images/icon-arrow-down.svg)}.faq.opened.mr77ygt>.faq__question.mr77ygt::after{transform:rotate(180deg);margin-top:-0.5rem}.faq__answer.mr77ygt{display:none}.faq.opened.mr77ygt .faq__answer.mr77ygt{display:block;margin-top:1.2rem}@media (min-width:1024px){.faq.opened.mr77ygt .faq__answer.mr77ygt{margin-top:.9rem}}`);
        

                $$apply();
                return $component;
            })();}

    function App($element, $option) {
      if (!$option) $option = {};
      if (!$option.events) $option.events = {};
      const $props = $option.props || ({});
      const $component = $$makeComponent($element, $option);
      const $$apply = $$makeApply($component.$cd);
      let $class = $option.$class;
      $component.push = $$apply;
      autoSubscribe($component.$cd, $$apply, Faq);
      const faqs = [{
        id: 0,
        question: 'How many team members can I invite?',
        answer: 'ou can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
        opened: false
      }, {
        id: 1,
        question: 'What is the maximum file upload size?',
        answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        opened: true
      }, {
        id: 2,
        question: 'How do I reset my password?',
        answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
        opened: false
      }, {
        id: 3,
        question: 'Can I cancel my subscription?',
        answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
        opened: false
      }, {
        id: 4,
        question: 'Do you provide additional support?',
        answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
        opened: false
      }];
      function faqToggle(event) {
        $$apply();
        const clickedFaqId = parseInt(event.currentTarget.dataset.id);
        faqs.forEach((faq, index) => {
          if (index === clickedFaqId) {
            faq.opened = true;
          } else {
            faq.opened = false;
          }
        });
      }
      
            return (function() {
                let $cd = $component.$cd;
        
    function $$build10($cd, $parentElement) {
    const el0 = $parentElement[$$childNodes][1][$$childNodes][1][$$childNodes][4][$$childNodes][2];

            {
                function bind($ctx, $template, faq, index) {
                    function $$build9($cd, $parentElement) {
    const el8 = $parentElement[$$childNodes][0];

            {
                let props = {};
                let boundProps = {};
                let slots = {};
                let events = {};
    props.opened = faq.opened;
    boundProps.opened = 2;
    events.click = faqToggle;

                    let pf2 = () => ((faq.id));
                    let v3 = pf2();
                    props.id = v3;
                    boundProps.id = 1;

                    $watch($cd, pf2, _id => {
                        props.id = _id;
                        groupCall();
                    }, {ro: true, cmp: $$compareDeep, value: $$cloneDeep(v3)});
                

                    let pf4 = () => ((faq.question));
                    let v5 = pf4();
                    props.question = v5;
                    boundProps.question = 1;

                    $watch($cd, pf4, _question => {
                        props.question = _question;
                        groupCall();
                    }, {ro: true, cmp: $$compareDeep, value: $$cloneDeep(v5)});
                

                    let pf6 = () => ((faq.answer));
                    let v7 = pf6();
                    props.answer = v7;
                    boundProps.answer = 1;

                    $watch($cd, pf6, _answer => {
                        props.answer = _answer;
                        groupCall();
                    }, {ro: true, cmp: $$compareDeep, value: $$cloneDeep(v7)});
                
    let groupCall = $$groupCall();            let componentOption = {afterElement: true, noMount: true, props, boundProps, events, slots};
                let $component = Faq(el8, componentOption);
                if($component) {
                    if($component.destroy) cd_onDestroy($cd, $component.destroy);
                    
                    if('opened' in $component) {
                        let value = $$cloneDeep(props.opened);
                        let $$_w0 = $watch($cd, () => (faq.opened), (value) => {
                            props.opened = value;
                            $$_w1.value = $$_w0.value;
                            $component.opened = value;
                        }, {ro: true, cmp: $$compareDeep, value});
                        let $$_w1 = $watch($component.$cd, () => ($component.opened), (v1) => {
                            props.opened = v1;
                            $$_w0.value = $$_w1.value;
                            faq.opened = v1;
                            $$apply();
                        }, {cmp: $$compareDeep, value});
                    } else console.error("Component Faq doesn't have prop opened");
                
    groupCall.emit = $component.push;                if($component.onMount) $tick($component.onMount);
                }
        }}                $$build9($ctx.cd, $template);
                    $ctx.rebind = function(_index, _faq) {
                        faq = _faq;
                    };
                }
                function getKey(_, i) {return i;}
                let itemTemplate = $$htmlToFragmentClean(`<!---->`, true);

                $$eachBlock($cd, el0, 0, () => (faqs), getKey, itemTemplate, bind);
            }
        }const rootTemplate = $$htmlToFragmentClean(` <main class="main"> <section class="faqs"> <h1 class="sr-only">FAQ section</h1> <div class="faqs__image"></div><div class="faqs-container"><h2 class="t-h2 faqs__heading">FAQ</h2> <!----></div> </section> </main> `);

            $$build10($cd, rootTemplate);
            $component.$$render(rootTemplate);
        

                $$apply();
                return $component;
            })();}

    App(document.body);

}());
