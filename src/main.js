const express = require('express')
const {response} = require('express')
const listRoutes = require('./routes/list')
const detailRoutes = require('./routes/detail')
const gameRoutes = require('./routes/game')
const axios = require('axios')

const app = express()
app.use(express.json())

app.use("/list", listRoutes)
app.use("/detail", detailRoutes)
app.use("/game", gameRoutes)

app.get("/",async (req, res, next) => {
            
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon-species/?offset=100&limit=3", { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } });
        console.log(response.data);
        res.send(response.data);
    }
    catch (err) {
        next(err)
    }
    })

app.listen(3000)