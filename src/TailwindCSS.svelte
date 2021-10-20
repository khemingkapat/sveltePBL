<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.hamburger-menu {
		@apply rounded-3xl 
			w-32 
			h-32 
			bg-green-700 
			fixed 
			top-0 
			right-0
			m-2
			z-30;
	}

	.sidebar {
		@apply absolute
			top-0
			right-0 
			h-screen 
			w-1/4 
			bg-black;
	}
</style>
