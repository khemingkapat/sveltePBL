<script lang="ts">
	import TailwindCss from "./TailwindCSS.svelte";
	import Header from "./components/Header.svelte";
	import Hamburger from "./components/Hamburger.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import DataChart from './pages/DataChart.svelte'
	let isOpen: boolean = false;
</script>

<div class='flex'>
<TailwindCss />
<Hamburger
	open = {isOpen}
	on:click={() => {
		isOpen = !isOpen
		console.log(isOpen);
	}}
/>
<Sidebar open={isOpen} />
<Header />
<DataChart/>
</div>