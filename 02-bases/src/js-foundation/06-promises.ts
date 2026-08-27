import {http} from '../plugins/index'

export const getPokemonNameById = async(id:string|number):Promise<string> => {


    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    // return fetch(url)
    // .then((response) => response.json())
    // // .then(() => {throw new Error('Pokemon no existe')})
    // .then((pokemon) => pokemon.name)

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await http.get(url)
    // const resp = await fetch(url)
    // const pokemon = await resp.json()
    return pokemon.name
}