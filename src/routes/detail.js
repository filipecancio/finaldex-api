import { Router } from 'express'
import {getPokemonDetail} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const detailRoutes = Router();

detailRoutes.get("/test", (req, response) =>{
    response.send({message:"Backend Pegou"})
})

detailRoutes.get("/:id", (req, response) =>{
    const id = req.params.id
    getPokemonDetail(id,(data)=>{
        response.send(data)
    })
    
})
