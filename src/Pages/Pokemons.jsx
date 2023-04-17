import React, { useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import pokeball from '../assets/pokeball.png'

const Pokemons = () => {
    const pokemons=useLoaderData()
    const[searchPokemon,setSearchPokemon]=useState("")
    const filteredPokemons=pokemons.filter(pokemon=>((pokemon.name).toLowerCase()).includes(searchPokemon.toLowerCase()))

  return (
    <>
        <input className='w-1/3 mx-auto block p-3 rounded-lg bg-gray-800 border-solid border-2 border-teal-400' type='text' placeholder='search pokemons' value={searchPokemon} onChange={(e)=>setSearchPokemon(e.target.value)} />
        <div className='w-full mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-6 md:px-3'>
            {filteredPokemons.map(pokemon=>(
                <NavLink to={pokemon.name.toString()} key={pokemon.name}>
                    <div className='p-4 flex justify-between items-center bg-gray-800 rounded-lg shadow-xl sm:w-11/12 mx-auto hover:bg-teal-500 hover:text-white w-3/4'>
                        <h2 className='text-lg'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                        <img src={pokeball} alt='pokeball' className='pokeball w-1/6 sm:w-1/4'/>
                    </div>
                </NavLink>
            ))}
        </div>
    </>
  )
}

export default Pokemons

export const pokemonsLoader=async()=>{
    const res=await fetch('https://pokeapi.co/api/v2/pokemon?limit=400')
    const data=await res.json()
    return data.results
}