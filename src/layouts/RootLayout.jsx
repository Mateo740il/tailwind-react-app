import {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png';
import { PokemonContext } from "../context/PokemonContext";
import Breadcrumbs from "../components/Breadcrumbs";


const RootLayout = () => {
  const [myPokemonsList,setMyPokemonsList]=useState([])
  let today=new Date()
  return (
    <>
      <header className="w-full bg-teal-600 py-4 shadow-lg sticky">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-7">
          <img src={logo} alt="app-logo" className="logo w-1/4 md:w-2/12"/>
          <ul className="flex justify-between items-center gap-4">
              <NavLink className="text-white hover:text-opacity-80 text-lg" to='/'>Home</NavLink>
              <NavLink className="text-white hover:text-opacity-80 text-lg" to='/pokemons'>Pokemons</NavLink>
              <NavLink className="text-white hover:text-opacity-80 text-lg" to='/mypokemons'>My Pokemons</NavLink>
          </ul>
        </nav>
      </header>
      <Breadcrumbs/>
      <main className="max-w-2xl md:max-w-5xl mx-auto mt-7 min-h-screen">
        <PokemonContext.Provider  value={[myPokemonsList,setMyPokemonsList]}>
          <Outlet/>
        </PokemonContext.Provider>
      </main>
      <footer className='bg-teal-500 p-4 flex justify-center items-center text-white mt-12'>
          <p>Copyright &copy; {today.getFullYear()} Mateo Bukić</p>
      </footer>
    </>
  );
};

export default RootLayout;
