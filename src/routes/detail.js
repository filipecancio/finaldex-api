import { Router } from 'express'
import {getPokemonDetail} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const detailRoutes = Router();

detailRoutes.get("/test", (req, response) =>{
    response.send({message:"Backend Pegou"})
})

detailRoutes.get("/:id", async(req, res) =>{
    const id = req.params.id
    const response = await getPokemonDetail(id)
    res.send(response.data)
    
})
