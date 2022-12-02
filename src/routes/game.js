import { Router } from 'express'
import {getRandomPokemon} from '../server/pokeapi.js'

export const gameRoutes = Router();

gameRoutes.get("/", (req, response) =>{
    const rpokemon = getRandomPokemon( async (body) =>{
        
        response.send({
            "pokemons":"aa"
        })
    }) 
    console.log(rpokemon)
})