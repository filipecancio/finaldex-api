import { Router } from 'express'
import {getPokemonDetail} from '../server/pokeapi.js'

export const detailRoutes = Router();

detailRoutes.get("/test", (req, response) =>{
    response.send({message:"Backend Pegou"})
})

detailRoutes.get("/:id", async(req, res) =>{
    const id = req.params.id
    const response = await getPokemonDetail(id)
    const pokemon = response.data
    res.send({
        "name":pokemon.name,
        "id": pokemon.id,
        "avatarUrl": getAvatar(pokemon.id),
        "color": pokemon.color
    })
    
})

const getId = (url)=> {
    return url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/","");
}

const getAvatar = (id)=> {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png` 
}

const getRandomColor = ()=>{
    const colors = ['black','blue','brown','gray','green','pink','purple','red','white','yellow']
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}
