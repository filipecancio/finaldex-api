import { response } from 'express'
import request from 'request'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const getPokemonDetail = (id,fun) => {
    request(`${BASE_URL}pokemon-species/${id}`,(err,res,body)=> {
        fun(body)
        return body
    })
}

export const getRandomPokemon = (fun) => {
    const url_target = `${BASE_URL}pokemon-species/?offset=${getRandomInt(1,1130)}&limit=3`
    request(url_target,(err,res,body)=> {
        fun(body)
        return body
    })
}

export const getPokemonEspecies = (id,fun) => {
    request(`${BASE_URL}pokemon-species${id}/`,(err,res,body)=> {
        fun(body)
        return body
    })
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}