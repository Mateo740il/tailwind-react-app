import { useLoaderData, useParams} from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { useContext, useState } from 'react';

const PokemonDetails = () => {
    const [myPokemonsList,setyMPokemonsList]=useContext(PokemonContext)
    const [disabled,setDiabled]=useState(false)
    const {name}=useParams()
    const pokemon=useLoaderData()
    const addPokemonToList=()=>{
      const pokemonName=pokemon.name
      const pokemonID=pokemon.game_indices[0].game_index
      const pokemonSprite=pokemon.sprites.front_default
      setyMPokemonsList([...myPokemonsList,{pokemonName,pokemonID,pokemonSprite}])
      setDiabled(true)
    }

  return (
    <div className='max-w-3/4 w-1/2 p-6 bg-gray-900 text-white mx-auto mt-10 flex flex-col items-center justify-center rounded-3xl shadow-xl gap-6 sm:w-2/6'>
        <div className='bg-gray-200 rounded-full shadow-xl flex flex-col justify-center items-center p-4 border-solid border-4 border-teal-400'>
          <img src={pokemon.sprites.front_default} alt='pokemon' className='logo w-full'/>
        </div>
        <h2 className='text-3xl text-teal-400'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Height: {pokemon.types[0].type.name}</p>
        <button disabled={disabled} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600" onClick={addPokemonToList}>Add to favorites</button>
    </div>
  )
}

export default PokemonDetails

export const pokemonLoader=async({params})=>{
    const {name}=params
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data=await res.json()
    console.log(data);
    return data
}