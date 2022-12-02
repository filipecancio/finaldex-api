import { Router, response } from 'express'
import {getPokemonEspecies} from '../server/pokeapi.js'
import circularJSON from 'circular-json'

export const listRoutes = Router();

listRoutes.get("/", async (req, res) =>{
    const {offset,limit} = req.query

    const response = await getPokemonEspecies("")
    const pokemonPagination = response.data
    const pokemonList = pokemonPagination.results.map(pokemon => {
        return {
            "name":pokemon.name,
            "id": getId(pokemon.url),
            "avatarUrl": getAvatar(pokemon.url)
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
