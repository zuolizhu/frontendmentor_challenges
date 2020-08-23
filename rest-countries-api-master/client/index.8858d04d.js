import{S as s,i as a,s as t,e as r,a as e,t as o,c,b as l,d as n,f as i,g as d,h,j as u,k as f,l as p,n as v,m as g,o as m,r as y,p as E,q as $,u as _,v as b,w as C,x,y as A,z as I,A as z,B as w,C as L,D as P}from"./client.4d18f802.js";function S(s){const a=s-1;return a*a*a+1}function F(s,{delay:a=0,duration:t=400,easing:r=S}){const e=getComputedStyle(s),o=+e.opacity,c=parseFloat(e.height),l=parseFloat(e.paddingTop),n=parseFloat(e.paddingBottom),i=parseFloat(e.marginTop),d=parseFloat(e.marginBottom),h=parseFloat(e.borderTopWidth),u=parseFloat(e.borderBottomWidth);return{delay:a,duration:t,easing:r,css:s=>`overflow: hidden;opacity: ${Math.min(20*s,1)*o};height: ${s*c}px;padding-top: ${s*l}px;padding-bottom: ${s*n}px;margin-top: ${s*i}px;margin-bottom: ${s*d}px;border-top-width: ${s*h}px;border-bottom-width: ${s*u}px;`}}function N(s){let a,t,g,m,y,E,$,_,b,C,x,A,I,z,w,L,P,S,F,N,k,D,B,T,V,O,R,j=s[0].name+"",M=s[0].region+"",U=s[0].capital+"";return{c(){a=r("li"),t=r("a"),g=r("img"),y=e(),E=r("div"),$=r("h2"),_=o(j),b=e(),C=r("p"),x=r("span"),A=o("Population: "),I=r("span"),z=o(s[1]),w=e(),L=r("p"),P=r("span"),S=o("Region: "),F=r("span"),N=o(M),k=e(),D=r("p"),B=r("span"),T=o("Capital: "),V=r("span"),O=o(U),this.h()},l(r){a=c(r,"LI",{class:!0});var e=l(a);t=c(e,"A",{class:!0,href:!0});var o=l(t);g=c(o,"IMG",{class:!0,src:!0,alt:!0}),y=n(o),E=c(o,"DIV",{class:!0});var h=l(E);$=c(h,"H2",{class:!0});var u=l($);_=i(u,j),u.forEach(d),b=n(h),C=c(h,"P",{class:!0});var f=l(C);x=c(f,"SPAN",{class:!0});var p=l(x);A=i(p,"Population: "),p.forEach(d),I=c(f,"SPAN",{class:!0});var v=l(I);z=i(v,s[1]),v.forEach(d),f.forEach(d),w=n(h),L=c(h,"P",{class:!0});var m=l(L);P=c(m,"SPAN",{class:!0});var R=l(P);S=i(R,"Region: "),R.forEach(d),F=c(m,"SPAN",{class:!0});var q=l(F);N=i(q,M),q.forEach(d),m.forEach(d),k=n(h),D=c(h,"P",{class:!0});var W=l(D);B=c(W,"SPAN",{class:!0});var G=l(B);T=i(G,"Capital: "),G.forEach(d),V=c(W,"SPAN",{class:!0});var H=l(V);O=i(H,U),H.forEach(d),W.forEach(d),h.forEach(d),o.forEach(d),e.forEach(d),this.h()},h(){h(g,"class","country-card__image svelte-1y944it"),g.src!==(m=s[0].flag)&&h(g,"src",m),h(g,"alt","country flag"),h($,"class","country-card__info__name t-name svelte-1y944it"),h(x,"class","t-semi-bold"),h(I,"class","t-light"),h(C,"class","t-country-info country-card__info__other svelte-1y944it"),h(P,"class","t-semi-bold"),h(F,"class","t-light"),h(L,"class","t-country-info country-card__info__other svelte-1y944it"),h(B,"class","t-semi-bold"),h(V,"class","t-light"),h(D,"class","t-country-info country-card__info__other svelte-1y944it"),h(E,"class","country-card__info svelte-1y944it"),h(t,"class","country-card-container svelte-1y944it"),h(t,"href",R="./country/"+s[0].alpha3Code),h(a,"class","country-card svelte-1y944it")},m(s,r){u(s,a,r),f(a,t),f(t,g),f(t,y),f(t,E),f(E,$),f($,_),f(E,b),f(E,C),f(C,x),f(x,A),f(C,I),f(I,z),f(E,w),f(E,L),f(L,P),f(P,S),f(L,F),f(F,N),f(E,k),f(E,D),f(D,B),f(B,T),f(D,V),f(V,O)},p(s,[a]){1&a&&g.src!==(m=s[0].flag)&&h(g,"src",m),1&a&&j!==(j=s[0].name+"")&&p(_,j),1&a&&M!==(M=s[0].region+"")&&p(N,M),1&a&&U!==(U=s[0].capital+"")&&p(O,U),1&a&&R!==(R="./country/"+s[0].alpha3Code)&&h(t,"href",R)},i:v,o:v,d(s){s&&d(a)}}}function k(s,a,t){let{country:r}=a;const e=r.population.toLocaleString();return s.$$set=s=>{"country"in s&&t(0,r=s.country)},[r,e]}class D extends s{constructor(s){super(),a(this,s,k,N,t,{country:0})}}function B(s,a,t){const r=s.slice();return r[9]=a[t],r}function T(s){let a,t,p,E,$,_,b,C,x,A,I,z,w,P,S,N,k,D,B,T;return{c(){a=r("div"),t=r("ul"),p=r("li"),E=o("Africa"),$=e(),_=r("li"),b=o("America"),C=e(),x=r("li"),A=o("Asia"),I=e(),z=r("li"),w=o("Europe"),P=e(),S=r("li"),N=o("Oceania"),this.h()},l(s){a=c(s,"DIV",{class:!0});var r=l(a);t=c(r,"UL",{class:!0});var e=l(t);p=c(e,"LI",{class:!0});var o=l(p);E=i(o,"Africa"),o.forEach(d),$=n(e),_=c(e,"LI",{class:!0});var h=l(_);b=i(h,"America"),h.forEach(d),C=n(e),x=c(e,"LI",{class:!0});var u=l(x);A=i(u,"Asia"),u.forEach(d),I=n(e),z=c(e,"LI",{class:!0});var f=l(z);w=i(f,"Europe"),f.forEach(d),P=n(e),S=c(e,"LI",{class:!0});var v=l(S);N=i(v,"Oceania"),v.forEach(d),e.forEach(d),r.forEach(d),this.h()},h(){h(p,"class","region svelte-d6z5sd"),h(_,"class","region svelte-d6z5sd"),h(x,"class","region svelte-d6z5sd"),h(z,"class","region svelte-d6z5sd"),h(S,"class","region svelte-d6z5sd"),h(t,"class","regions"),h(a,"class","dropdown-menu svelte-d6z5sd")},m(r,e){u(r,a,e),f(a,t),f(t,p),f(p,E),f(t,$),f(t,_),f(_,b),f(t,C),f(t,x),f(x,A),f(t,I),f(t,z),f(z,w),f(t,P),f(t,S),f(S,N),D=!0,B||(T=[g(p,"click",s[5]),g(_,"click",s[5]),g(x,"click",s[5]),g(z,"click",s[5]),g(S,"click",s[5])],B=!0)},p:v,i(s){D||(L(()=>{k||(k=m(a,F,{},!0)),k.run(1)}),D=!0)},o(s){k||(k=m(a,F,{},!1)),k.run(0),D=!1},d(s){s&&d(a),s&&k&&k.end(),B=!1,y(T)}}}function V(s){let a,t;return a=new D({props:{country:s[9]}}),{c(){E(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,r){_(a,s,r),t=!0},p(s,t){const r={};8&t&&(r.country=s[9]),a.$set(r)},i(s){t||(b(a.$$.fragment,s),t=!0)},o(s){C(a.$$.fragment,s),t=!1},d(s){x(a,s)}}}function O(s){let a,t,v,m,E,$,_,x,L,S,F,N,k,D,O,R,j,M,U=(""===s[2]?"Filter by Region":s[2])+"",q=s[1]&&T(s),W=s[3],G=[];for(let a=0;a<W.length;a+=1)G[a]=V(B(s,W,a));const H=s=>C(G[s],1,1,()=>{G[s]=null});return{c(){a=e(),t=r("div"),v=r("div"),m=r("label"),E=o("Country Name"),$=e(),_=r("input"),x=e(),L=r("div"),S=r("div"),F=o(U),N=e(),q&&q.c(),k=e(),D=r("section"),O=r("ul");for(let s=0;s<G.length;s+=1)G[s].c();this.h()},l(s){A('[data-svelte="svelte-1ltwlbq"]',document.head).forEach(d),a=n(s),t=c(s,"DIV",{class:!0});var r=l(t);v=c(r,"DIV",{class:!0});var e=l(v);m=c(e,"LABEL",{class:!0,for:!0});var o=l(m);E=i(o,"Country Name"),o.forEach(d),$=n(e),_=c(e,"INPUT",{class:!0,id:!0,name:!0,placeholder:!0}),e.forEach(d),x=n(r),L=c(r,"DIV",{class:!0});var h=l(L);S=c(h,"DIV",{class:!0});var u=l(S);F=i(u,U),u.forEach(d),N=n(h),q&&q.l(h),h.forEach(d),r.forEach(d),k=n(s),D=c(s,"SECTION",{class:!0});var f=l(D);O=c(f,"UL",{class:!0});var p=l(O);for(let s=0;s<G.length;s+=1)G[s].l(p);p.forEach(d),f.forEach(d),this.h()},h(){document.title="Frontend Mentor | REST Countries API with color theme switcher",h(m,"class","sr-only"),h(m,"for","searchCountry"),h(_,"class","searchbar svelte-d6z5sd"),h(_,"id","searchCountry"),h(_,"name","searchCountry"),h(_,"placeholder","Search for a country…"),h(v,"class","searchbar-container svelte-d6z5sd"),h(S,"class","dropdown svelte-d6z5sd"),h(L,"class","dropdown-container svelte-d6z5sd"),h(t,"class","filters-group svelte-d6z5sd"),h(O,"class","countries-grid svelte-d6z5sd"),h(D,"class","countries svelte-d6z5sd")},m(r,e){u(r,a,e),u(r,t,e),f(t,v),f(v,m),f(m,E),f(v,$),f(v,_),I(_,s[0]),f(t,x),f(t,L),f(L,S),f(S,F),f(L,N),q&&q.m(L,null),u(r,k,e),u(r,D,e),f(D,O);for(let s=0;s<G.length;s+=1)G[s].m(O,null);R=!0,j||(M=[g(_,"input",s[7]),g(S,"click",s[4])],j=!0)},p(s,[a]){if(1&a&&_.value!==s[0]&&I(_,s[0]),(!R||4&a)&&U!==(U=(""===s[2]?"Filter by Region":s[2])+"")&&p(F,U),s[1]?q?(q.p(s,a),2&a&&b(q,1)):(q=T(s),q.c(),b(q,1),q.m(L,null)):q&&(P(),C(q,1,1,()=>{q=null}),z()),8&a){let t;for(W=s[3],t=0;t<W.length;t+=1){const r=B(s,W,t);G[t]?(G[t].p(r,a),b(G[t],1)):(G[t]=V(r),G[t].c(),b(G[t],1),G[t].m(O,null))}for(P(),t=W.length;t<G.length;t+=1)H(t);z()}},i(s){if(!R){b(q);for(let s=0;s<W.length;s+=1)b(G[s]);R=!0}},o(s){C(q),G=G.filter(Boolean);for(let s=0;s<G.length;s+=1)C(G[s]);R=!1},d(s){s&&d(a),s&&d(t),q&&q.d(),s&&d(k),s&&d(D),w(G,s),j=!1,y(M)}}}function R(){return this.fetch("https://restcountries.eu/rest/v2/all").then(s=>s.json()).then(s=>({countries:s}))}function j(s,a,t){let r,{countries:e}=a,o=e,c="",l=!1,n="";return s.$$set=s=>{"countries"in s&&t(6,e=s.countries)},s.$$.update=()=>{257&s.$$.dirty&&t(3,r=0===c.length?o:o.filter(s=>-1!==s.name.toLowerCase().indexOf(c.toLowerCase())))},[c,l,n,r,function(){t(1,l=!l)},function(){n!==this.textContent?t(2,n=this.textContent):t(2,n=""),t(8,o=""===n?e:e.filter(s=>-1!==s.region.indexOf(n))),t(1,l=!1)},e,function(){c=this.value,t(0,c)}]}export default class extends s{constructor(s){super(),a(this,s,j,O,t,{countries:6})}}export{R as preload};