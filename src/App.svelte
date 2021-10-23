<script lang="ts">
	import TailwindCss from "./TailwindCSS.svelte";
	import Header from "./components/Header.svelte";
	import Hamburger from "./components/Hamburger.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	let isOpen: boolean = false;
</script>

<div class='flex'>
<TailwindCss />
<Hamburger
	on:click={() => {
		isOpen = !isOpen;
	}}
/>
<Sidebar open={isOpen} />
<Header />
</div>