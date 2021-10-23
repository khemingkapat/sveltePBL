<script lang="ts">
	export let open;
</script>

<style>
	.sidebar-custom-width {
		@apply w-1/4;
	}
</style>

<nav class="absolute
			top-0 
			right-0
			h-screen 
			w-0
			transform
			bg-black
			duration-500"
			class:sidebar-custom-width= {open}
			></nav>
