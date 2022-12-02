import { Router } from 'express'
import {getRandomPokemon} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const gameRoutes = Router();

gameRoutes.get("/", (req, response) =>{
    getRandomPokemon((data)=>{
        response.send(data)
    })
})