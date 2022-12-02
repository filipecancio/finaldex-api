import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const getPokemonDetail = (id,fun) => {
    axios.get(`${BASE_URL}pokemon-species/${id}`, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
        .then(data => { 
            console.log(data) 
            fun(data)
        })
        .catch(err => fun(err))
}

export const getRandomPokemon = (fun) => {
    const url_target = `${BASE_URL}pokemon-species/?offset=${getRandomInt(1,1130)}&limit=3`
    axios.get(url_target, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
        .then(data => fun(data))
        .catch(err => fun(err))
}

export const getPokemonEspecies = (id,fun) => {
    axios.get(`${BASE_URL}pokemon-species${id}/`, { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
        .then(data => fun(data))
        .catch(err => fun(err))
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}