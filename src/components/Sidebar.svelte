<script lang="ts">
	export let open;
</script>

<nav class="absolute
			top-0 
			right-0
			h-screen 
			w-1/4
			transform
			bg-black
			duration-500"
			class:translate-x-full={!open}
			class:invisible={!open}
			></nav>
