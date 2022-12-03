const express = require('express')
const {getRandomPokemon} = require('../server/pokeapi')

const gameRoutes = express.Router();

gameRoutes.get("/", async (req, res) =>{
    const response = await getRandomPokemon()
    const pokemonList = response.data.results.map(pokemon => {
        return {
            "name":pokemon.name,
            "id": getId(pokemon.url),
            "avatarUrl": getAvatar(pokemon.url)
        }
    })
    console.log(response.data.results)
    res.send(pokemonList)
})

const getId = (url)=> {
    return url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").replace("/","");
}

const getAvatar = (url)=> {
    const id = getId(url)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png` 
}

module.exports = gameRoutes