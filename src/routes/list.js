import { Router } from 'express'
import {getPokemonEspecies} from '../server/pokeapi.js'

const listRoutes = Router();

listRoutes.get("/", (req, response) =>{
    const {offset,limit} = req.query

    getPokemonEspecies("", async (body) =>{
        response.send(body)
    }) 
})

export default listRoutes