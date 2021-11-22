<script lang="ts">
	import TailwindCss from "./TailwindCSS.svelte";
	import Header from "./components/Header.svelte";
	import Hamburger from "./components/Hamburger.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import DataChart from "./pages/DataChart.svelte";
	let isOpen: boolean = false;
</script>

<div class="flex flex-col">
	<TailwindCss />
	<Hamburger
		open={isOpen}
		on:click={() => {
			isOpen = !isOpen;
		}}
	/>
	<div class="w-0 h-screen fixed bg-gray-500 opacity-50 transform duration-500" 
			class:invisible = {!isOpen}/>
	<Sidebar open={isOpen} />
	<!-- <Header /> -->
	<DataChart />
</div>
