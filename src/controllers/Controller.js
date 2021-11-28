const axios = require('axios')
const coinModel = require('../models/coinModel')

const cryptoCoin = async function (req, res) {
    try {
    let response = await axios.get('http://api.coincap.io/v2/assets', {headers:{Authorization:"Bearer 80658748-50aa-4f96-b1ef-15aab3e9e684"}})
    let coinList = response.data.data
    for (let i = 0; i < coinList.length; i++) {
        let coinData = {
            symbol: coinList[i].symbol,
            name: coinList[i].name,
            marketCapUsd: coinList[i].marketCapUsd,
            priceUsd: coinList[i].priceUsd
        }

     await coinModel.findOneAndUpdate({name:coinList[i].name}, coinData, {upsert:true, new:true})
    }
    
    let sorted = coinList.sort((a, b) => b.changePercent24Hr- a.changePercent24Hr)
    res.status(200).send({ status: true, data: sorted })
    }
    catch(err) {
        res.status(500).send({status:false, msg:"Something Went Wrong"})
    }
}

module.exports.cryptoCoin = cryptoCoin
