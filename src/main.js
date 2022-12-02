import express from 'express'
import {listRoutes} from './routes/list.js'
import {detailRoutes} from './routes/detail.js'
import {gameRoutes} from './routes/game.js'

const app = express()
app.use(express.json())

app.use("/list", listRoutes)
app.use("/detail", detailRoutes)
app.use("/game", gameRoutes)

app.listen(3000)