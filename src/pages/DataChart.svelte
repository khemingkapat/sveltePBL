<script lang="ts">
	import fetchData, { pmData } from "../scripts/fetchData";
	import Line from "svelte-chartjs/src/Line.svelte";

	let pmDataPromise = fetchData("http://127.0.0.1:8080/day");
</script>

<div class="flex flex-col">
	{#await pmDataPromise}
		<p>Waiting For The pmData</p>
	{:then fetchPMData}
		<Line
			data={{
				labels: fetchPMData.date,
				datasets: [
					{
						label: "Humidity",
						data: fetchPMData.Humidity,
						fill: false,
						borderColor: "lightcoral",
						pointRadius: 0.5,
					},
					{
						label: "PM1_0",
						data: fetchPMData.PM1_0,
						fill: false,
						borderColor: "#742774",

						pointRadius: 0.5,
					},
					{
						label: "PM2_5",
						data: fetchPMData.PM2_5,
						fill: false,
						borderColor: "#00FF00",

						pointRadius: 0.5,
					},
					{
						label: "PM10_0",
						data: fetchPMData.PM10_0,
						fill: false,
						borderColor: "rgba(75,192,192,1)",
						pointRadius: 0.5,
					},
					{
						label: "Temperature",
						data: fetchPMData.Temperature,
						fill: false,
						borderColor: "red",
						pointRadius: 0.5,
					},
				],
				maintainAspectRatio: false,
			}}
			options={{ maintainAspectRatio: false }}
		/>
	{/await}
</div>
