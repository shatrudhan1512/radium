const axios = require('axios')

const londonWhether = async function(req, res) {
    try{
        let options = {
            method: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=152c53a2a3ffceb3af6c4cfa1353640c"
        }
        let response = await axios(options)
        let temperature = response.data.main.temp
        res.status(200).send( {msg: "Whether Fetched", data: {city:"Landon", temp:temperature} })
    }
     catch (err) {
         res.status(500).send({msg: "Something went wrong", message:err.message})
     }
}

const citiesWhether = async function (req, res) {
    try {
    let arr = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let obj = { city: arr[i] }
        let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${arr[i]}&appid=152c53a2a3ffceb3af6c4cfa1353640c`)
        let temperature = response.data.main.temp
        obj.temp = temperature
        arr2.push(obj)
    }    
    let sorted = arr2.sort((a, b) => a.temp - b.temp)
    res.status(200).send({ msg: "temperature fetched and sorted", data: sorted })
    }
    catch(err) {
        res.status(500).send({status:false, msg:"Something Went Wrong"})
    }
}
module.exports.citiesWhether = citiesWhether
module.exports.londonWhether = londonWhether
