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
    request(`${BASE_URL}pokemon-species/?offset=${Math.floor(Math.random() * 1130)}&limit=3`,(err,res,body)=> {
        fun(body.data)
        return body
    })
}

export const getPokemonEspecies = (id,fun) => {
    request(`${BASE_URL}pokemon-species${id}/`,(err,res,body)=> {
        fun(body)
        return body
    })
}