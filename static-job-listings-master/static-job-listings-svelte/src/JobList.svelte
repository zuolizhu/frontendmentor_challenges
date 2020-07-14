<script>
  import Job from './Job.svelte';
  import ClickedKeyword from './ClickedKeyword.svelte';
  const jobs = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./assets/images/photosnap.svg",
    "isNew": true,
    "isFeatured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./assets/images/manage.svg",
    "isNew": true,
    "isFeatured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./assets/images/account.svg",
    "isNew": true,
    "isFeatured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./assets/images/myhome.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./assets/images/loop-studios.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./assets/images/faceit.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./assets/images/shortly.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./assets/images/insure.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./assets/images/eyecam-co.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./assets/images/the-air-filter-company.svg",
    "isNew": false,
    "isFeatured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];

// extracting keywords
const jobIdswKeywords = jobs.map(job => {
  let keywords = [];
  keywords.push(job.role);
  keywords.push(job.level);
  keywords = keywords.concat(job.languages);
  keywords = keywords.concat(job.tools);
  // return object with id and keywords
  const jobIdwKeywords = { id: job.id, keywords };
  return jobIdwKeywords;
});

let currentFilter = [];

let selectedKeywords = [];

$: filteredJobs = currentFilter.length == 0 ? jobs : jobs.filter(job => currentFilter.includes(job.id));

// check if all selected keywords match this job keywords
function isMetConditions(keywords, selectedKeywords) {
  return selectedKeywords.every(keyword => keywords.includes(keyword));
}

// update existing filter list
function keywordsFilterUpdate(keyword) {
  // add keyword to list
  if (!selectedKeywords.includes(keyword)) {
    // updating array by assignment in order to trigger the reactivity
    selectedKeywords = [...selectedKeywords, keyword];
  }
  const temp = [];
  jobIdswKeywords.forEach((jobIdwKeywords) => {
    if (isMetConditions(jobIdwKeywords.keywords, selectedKeywords)) {
      temp.push({"id": jobIdwKeywords.id});
    }
  });
  currentFilter = temp.map(item => { return item.id })
}


function handleKeywordsFilterUpdate(event) {
  keywordsFilterUpdate(event.detail);
}

function handleRemoveKeyword(event) {
  // remove keywords from list
  selectedKeywords = selectedKeywords.filter(keyword => keyword !== event.detail);
  // re-render the list
  const temp = [];
  jobIdswKeywords.forEach((jobIdwKeywords) => {
    if (isMetConditions(jobIdwKeywords.keywords, selectedKeywords)) {
      temp.push({"id": jobIdwKeywords.id});
    }
  });
  currentFilter = temp.map(item => { return item.id })
}

function handleClear() {
  selectedKeywords = [];
  currentFilter = [];
}


</script>

<section class="job-list">
  <h2 class="sr-only">Jobs list down below</h2>
  <!-- filter -->
  {#if selectedKeywords.length > 0}
    <div class="jobs-filter">
      <div class="clicked-keywords-container">
        {#each selectedKeywords as keyword (keyword)}
          <ClickedKeyword 
            keyword={keyword}
            on:removeKeyword={handleRemoveKeyword} />
        {/each}
      </div>
      <button class="jobs-filter__clear" on:click={handleClear}>Clear</button>
    </div>
  {/if}
  <!-- jobs -->
  {#each filteredJobs as job (job.id)}
	<Job {...job} on:keywordsFilterUpdate={handleKeywordsFilterUpdate} />
  {/each}
</section>

<style type="text/scss">

  .job-list {
    height: 100%;
    min-height: 100vh;
    padding: 5.6rem 2.4rem 3.2rem;
    @media(min-width: 640px) {
      display: flex;
      flex-direction: column;
    }
    @media(min-width: 960px) {
      padding: 7.6rem 2.4rem 0;
    }
  }

  .jobs-filter {
    background-color: var(--color-white);
    box-shadow: 0 1.5rem 2rem -.5rem var(--color-card-shadow);
    padding: 2rem 2.4rem 2rem 1.9rem;
    display: inline-flex;
    align-items: center;
    border-radius: .5rem;
    margin-bottom: -3.6rem;
    transform: translateY(-9.2rem);
    width: 100%;
    max-width: 111rem;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 960px) {
      transform: translateY(-11.2rem);
      margin-bottom: -7.2rem;
      padding: 2rem 4rem;
    }
  }

  .clicked-keywords-container {
    --gap: 1.6rem;
    display: inline-flex;
    flex-wrap: wrap;
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
    width: calc(100% + var(--gap));
  }

  .jobs-filter__clear {
    color: #7C8F8F;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: var(--weight-bold);
    line-height: 2.4rem;
    font-size: 1.3rem;
    transition: var(--transition) color;
    &:hover {
      text-decoration: underline;
      color: var(--color-dark-cyan);
    }
  }

</style>