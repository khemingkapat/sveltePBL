import axios from "axios"

export interface pmData {
	date : Array<String>,
	Temperature : Array<number>,
	PM1_0 : Array<number>,
	PM2_5 : Array<number>,
	PM10_0 : Array<number>,
	Humidity : Array<number>

}

export enum freqType {
	hour = 'hour',
	day = "day",
	week = 'week'
}

const fetchData = async (freq:freqType) => {
	let resultData:pmData = {
		date: [],
		Humidity: [],
		PM1_0: [],
		PM2_5: [],
		PM10_0: [],
		Temperature: [],
	}

	const url:string = `http://127.0.0.1:8080/${freq}`


	await axios.get(url)
		.then((res) => res.data)
		.then((data) => {
			Object.entries(data).forEach(([key, value]) => {
				resultData.date.push(key)
				Object.entries(value).forEach(([key, value]) => {
					resultData[key].push(value)
				})
			})
		})

	return resultData


}

export default fetchData
