<script lang="ts">
	import fetchData from "../scripts/fetchData";
	import { onMount } from "svelte";
	let data:Array<Object>
	// const fetchData = () => {
	// 	axios
	// 		.get("https://jsonplaceholder.typicode.com/users")
	// 		.then((res) => (data = res.data));
	// };

	onMount(() => {
		data = fetchData('http://127.0.0.1:8080/day')
	});

	console.log(data)
</script>

<div class="flex flex-col">
<!-- {#each data as user}
	<p>{user.name}</p>
{/each} -->
</div>