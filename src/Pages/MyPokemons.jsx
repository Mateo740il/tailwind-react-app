import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

const MyPokemons = () => {
  const [myPokemonsList,setMyPokemonsList]=useContext(PokemonContext)
  const deletePokemon=(pokemonID)=>{
    let filteredList=myPokemonsList.filter(pokemon=>pokemon.pokemonID!==pokemonID)
    setMyPokemonsList(filteredList)
  }
  return (
    <>
      { myPokemonsList.length ?
        (<div className='w-3/4 mt-16 mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3 sm:w-full sm:gap-10 md:grid-cols-4 md:w-full md:gap-6 md:px-3'>
           {myPokemonsList.map((pokemon) => (
             <div key={pokemon.pokemonID} className='p-6 bg-gray-900 text-white flex flex-col items-center justify-center rounded-3xl shadow-xl gap-8'>
                <h1>{pokemon.pokemonName.charAt(0).toUpperCase() + pokemon.pokemonName.slice(1)}</h1>
                <div className='bg-gray-200 rounded-full shadow-xl flex flex-col justify-center items-center p-4 border-solid border-4 border-teal-400'>
                  <img src={pokemon.pokemonSprite} alt='pokemon' className='logo w-full'/>
                </div>
                <button className='bg-gradient-to-r from-pink-500 to-yellow-500 p-2 rounded-lg hover:from-pink-600 hover:to-yellow-600' onClick={()=>deletePokemon(pokemon.pokemonID)}>Delete Pokemon</button>
             </div>
          ))}
        </div>)
          : <h2 className='text-4xl text-grey-200 text-center mt-20'>No favorites pokemons !</h2>
      }
    </>
  )
}

export default MyPokemons

