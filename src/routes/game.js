import { Router, response } from 'express'
import {getRandomPokemon} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const gameRoutes = Router();

gameRoutes.get("/", async (req, res) =>{
    const response = await getRandomPokemon()
    console.log(response.data.count)
    res.send(response.data)
})