<script>
	import JobList from './JobList.svelte';
	import Header from './Header.svelte';
</script>

<Header/>
<main class="bg-light-main-cyan-1 h-screen">
	<JobList/>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>