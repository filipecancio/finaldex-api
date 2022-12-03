import { Router, response } from 'express'
import {getPokemonEspecies,getPokemonDetail} from '../server/pokeapi.js'

export const listRoutes = Router();

listRoutes.get("/", async (req, res) =>{
    const {offset,limit} = req.query

    const response = await getPokemonEspecies(offset,limit)
    const pokemonPagination = response.data
    const pokemonList = pokemonPagination.results.map((pokemon) => {
        return {
            "name":pokemon.name,
            "id": getId(pokemon.url),
            "avatarUrl": getAvatar(pokemon.url),
            "color": getRandomColor()
        }
    })
    pokemonPagination.results = pokemonList
    res.send(pokemonPagination)

})

const getId = (url)=> {
    return url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/","");
}

const getAvatar = (url)=> {
    const id = getId(url)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png` 
}

const getRandomColor = ()=>{
    const colors = ['black','blue','brown','gray','green','pink','purple','red','white','yellow']
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}