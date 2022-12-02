import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const getPokemonDetail = async (id,fun) => {
    return await axios.get(`${BASE_URL}pokemon-species/${id}`, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
}

export const getRandomPokemon = async (fun) => {
    const url_target = `${BASE_URL}pokemon-species/?offset=${getRandomInt(1,1130)}&limit=3`
    return await axios.get(url_target, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
}

export const getPokemonEspecies = async (id,fun) => {
    return await axios.get(`${BASE_URL}pokemon-species${id}/`, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}