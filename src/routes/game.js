import { Router } from 'express'
import {getRandomPokemon} from '../server/pokeapi.js'

const gameRoutes = Router();

gameRoutes.get("/", (req, response) =>{
    const rpokemon = getRandomPokemon( async (body) =>{
        
        response.send({
            pokemons:body
        })
    }) 
    console.log(rpokemon)
})

export default gameRoutes