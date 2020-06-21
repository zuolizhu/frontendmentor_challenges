<script>
  export let logo; 
  export let company;
  export let isNew;
  export let isFeatured;
  export let JobTitle;
  export let postTime;
  export let jobType;
  export let location;
  export let keywords;
</script>

<div>
  <div class="company-logo">
      <img class="w-48 h-48 sm:w-88 sm:h-88" src={logo} alt="{company} logo.">
    <p>{company}</p>
  </div>
</div>