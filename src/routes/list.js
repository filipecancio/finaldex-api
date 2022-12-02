import { Router, response } from 'express'
import {getPokemonEspecies} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const listRoutes = Router();

listRoutes.get("/", async (req, res) =>{
    const {offset,limit} = req.query

    const response = await getPokemonEspecies("")

    res.send(response.data)

})
