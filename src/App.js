import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom";

import Home from "./Pages/Home";
import MyPokemons from "./Pages/MyPokemons";
import NotFound from "./Pages/NotFound";
import Pokemons, { pokemonsLoader } from "./Pages/Pokemons";

import PokemonsLayout from "./layouts/PokemonsLayout";
import RootLayout from "./layouts/RootLayout";
import PokemonDetails, { pokemonLoader } from "./Pages/PokemonDetails";



const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/pokemons" element={<PokemonsLayout/>}>
          <Route index element={<Pokemons/>} loader={pokemonsLoader}/>
          <Route path=":name" element={<PokemonDetails/>} loader={pokemonLoader}/>
        </Route>
        <Route path="/mypokemons" element={<MyPokemons/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
  )
)

function App() {

  return(
    <RouterProvider router={router}/>
  )
}

export default App;

