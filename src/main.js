import express,{response} from 'express'
import {listRoutes} from './routes/list.js'
import {detailRoutes} from './routes/detail.js'
import {gameRoutes} from './routes/game.js'
import axios from 'axios'

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