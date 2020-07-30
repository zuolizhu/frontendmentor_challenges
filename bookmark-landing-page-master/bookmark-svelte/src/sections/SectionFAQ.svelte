<script>
  const qnas = [
    {
      id: 1,
      question: 'What is Bookmark?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
      id: 2,
      question: 'How can I request a new browser?',
      answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
      id: 3,
      question: 'Is there a mobile app?',
      answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
      id: 4,
      question: 'What about other Chromium browsers?',
      answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
    }
  ];

  function handleAccordion(event) {
    const questionTab = event.currentTarget;
    questionTab.classList.toggle('active');
    const answerTab = questionTab.nextElementSibling;
    if (answerTab.style.maxHeight) answerTab.style.maxHeight = null;
    else answerTab.style.maxHeight = answerTab.scrollHeight + 'px';
  }
</script>

<section class="FAQ">
  <div class="container">
    <h2 class="t-h2 FAQ__intro__heading">Frequently Asked Questions</h2>
    <p class="t-body1 FAQ__intro__body">Here are some of our FAQs. If you have any other questions you’d like 
    answered please feel free to email us.</p>
    <div class="accordions">
      {#each qnas as qna (qna.id)}
        <div class="accordion">
          <div on:click={handleAccordion}
          class="question-tab">
            <p class="question t-question">{qna.question}</p>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
          </div>
          <div class="answer-tab">
            <p class="t-answer answer-tab__content">{qna.answer}</p>
          </div>
        </div>
      {/each}
    </div>
    <a href="./" class="button button--info">More Info</a>
  </div>
</section>

<style type="text/scss">
  .FAQ {
    text-align: center;
    padding-bottom: 12.3rem;
    @media (min-width: 768px) {
      padding-bottom: 14.9rem;
    }

    &__intro__heading {
      line-height: 3rem;
    }
    &__intro__body {
      padding: 0 .1rem;
      margin-top: 1.6rem; 
    }
  }

  .container {
    max-width: 54rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .question-tab {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    padding: 2rem 0 1.2rem;
    @media (min-width: 768px) {
      padding: 1.9rem 0 1.5rem;
    }

    &:hover {
      .question {
        color: var(--color-soft-red);
      }
    }

    .arrow path {
      transform-origin: center;
      transition: var(--transition) stroke, var(--transition) transform;
    }

    &.active {
      .arrow path {
        stroke: var(--color-soft-red);
        transform: rotate(180deg);
      }
    }
  }

  .accordion {
    border-bottom: 1px solid rgba(36, 42, 69, .15);
  }

  .accordion:first-child {
    @media (min-width: 768px) {
      border-top: 1px solid rgba(36, 42, 69, .15);
    }
  }

  .answer-tab {
    max-height: 0;
    overflow: hidden;
    transition: var(--transition) max-height;
    &__content {
      text-align: left;
      padding-top: 1.4rem;
      padding-bottom: 2.8rem;
      @media (min-width: 768px) {
        padding-top: 1.9rem;
        padding-bottom: 2.9rem;
      }
    }
  }

  .accordions {
    margin-top: 4.4rem;
    margin-bottom: 4.8rem;
    @media (min-width: 768px) {
      margin-top: 5.6rem;
      margin-bottom: 5.4rem;
      padding-right: 2.1rem;
    }
  }

</style>