import axios from "axios"

const fetchData = (url) => {
	let data = []
	axios.get(url)
		.then((res) => {
			data = res.data
			console.log(data)
		})

	return data

}

export default fetchData
