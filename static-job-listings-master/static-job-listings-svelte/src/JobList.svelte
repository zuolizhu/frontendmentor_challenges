<script>
  import Job from './Job.svelte';
  import ClickedKeyword from './ClickedKeyword.svelte';
  const jobs = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "../assets/images/photosnap.svg",
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
    "logo": "../assets/images/manage.svg",
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
    "logo": "../assets/images/account.svg",
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
    "logo": "../assets/images/myhome.svg",
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
    "logo": "../assets/images/loop-studios.svg",
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
    "logo": "../assets/images/faceit.svg",
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
    "logo": "../assets/images/shortly.svg",
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
    "logo": "../assets/images/insure.svg",
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
    "logo": "../assets/images/eyecam-co.svg",
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
    "logo": "../assets/images/the-air-filter-company.svg",
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



</script>

<section class="job-list">
  <!-- filter -->
  <div class="jobs-filter">
    {#each selectedKeywords as keyword (keyword)}
      <ClickedKeyword keyword={keyword} />
    {/each}
  </div>
  <!-- jobs -->
  {#each filteredJobs as job (job.id)}
	<Job {...job} on:keywordsFilterUpdate={handleKeywordsFilterUpdate} />
  {/each}
</section>

<style type="text/scss">

  .job-list {
    padding: 3.2rem 2.4rem 0;
    @media(min-width: 640px) {
      display: flex;
      flex-direction: column;
    }
  }
</style>