const axios = require('axios')

const BASE_URL = 'https://pokeapi.co/api/v2/'

exports.getPokemonDetail = async (id,fun) => {
    return await axios.get(`${BASE_URL}pokemon-species/${id}`, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
}

exports.getRandomPokemon = async (fun) => {
    const url_target = `${BASE_URL}pokemon-species/?offset=${getRandomInt(1,1130)}&limit=3`
    return await axios.get(url_target, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
}

exports.getPokemonEspecies = async (offset,limit) => {
    const queryText = getQuery(offset,limit)
    const url = `${BASE_URL}pokemon-species/${queryText}`
    console.log(url)
    return await axios.get(url, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getQuery = (offset,limit) => {
    const offsetQuery = offset ? `offset=${offset}` : ''
    const limitQuery = limit ? `limit=${limit}` : ''
    const plusQuery = (offsetQuery == ''||limit=='')? '' : '&'
    const query = (offset||limit)? `?${offsetQuery}${plusQuery}${limitQuery}` : ''
    return query
}