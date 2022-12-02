import { Router } from 'express'
import {getRandomPokemon} from '../server/pokeapi.js'

export const gameRoutes = Router();

gameRoutes.get("/", (req, response) =>{
    
    
    getRandomPokemon( async (body) =>{
        const {count} = body
        console.log(count)
        response.send(body)
    }) 
})