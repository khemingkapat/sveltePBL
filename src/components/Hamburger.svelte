<script lang="ts">
	export let open;
</script>

<button
	class="rounded-l-2xl
			w-16
			h-16
			bg-black
			fixed 
			top-0 
			right-0
			p-3
			z-30
			transform
			duration-500"
	class:hamburger-position={open}
	on:click
>
	<div class="z-31 flex flex-col">
		<div class="hamburger mt-1.5"/>
		<div class="hamburger" />
		<div class="hamburger" />
	</div>
</button>

<style>
	.hamburger-position {
		@apply right-1/4;
	}

	.hamburger {
		@apply bg-white p-0.5 rounded-md mb-2 transform duration-500;
		width : 90%;
	}

</style>
