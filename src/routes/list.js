import { Router } from 'express'
import {getPokemonEspecies} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const listRoutes = Router();

listRoutes.get("/", (req, response) =>{
    const {offset,limit} = req.query

    getPokemonEspecies("",(data)=>{
        response.send(data)
    })

})
