import React from 'react'
import heroImg from '../assets/Pokemon-PNG.png'

const Home = () => {
  return (
    <>
      <section id='hero' className='w-3/4 my-40 mx-auto flex flex-col justify-center items-center sm:flex-row sm:justify-between' >
        <article>
          <h1 className='text-4xl font-bold' >Pokémon app</h1>
          <p className='my-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a href='#about' className='bg-teal-500 p-3 rounded-md hover:bg-teal-600'>More Details</a>
        </article>
        <img className='w-full mt-10 sm:w-1/3' src={heroImg} alt='pokemons'/>
      </section>
      <section id='about' className='mb-32'>
        <p className='p-4'><span className='text-2xl font-bold text-teal-600'>Pokémon</span> is a Japanese media franchise managed by The Pokémon Company, founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1996, and is centered around fictional creatures called "Pokémon". In Pokémon, Pokémon Trainers are people who catch, train, care for, and battle with Pokémon. The English slogan for the franchise is "Gotta Catch ‘Em All!".There are currently 1015 Pokémon species.</p>
        <p className='p-4'>he franchise began as Pocket Monsters: Red and Green a pair of video games for the original Game Boy handheld system that were developed by Game Freak and published by Nintendo in February 1996. Pokémon soon became a media mix franchise adapted into various different media. Pokémon is one of the highest-grossing media franchises of all time. The Pokémon video game series is the third best-selling video game franchise of all time with more than 440 million copies sold and one billion mobile downloads.The Pokémon video game series spawned an anime television series that has become the most successful video game adaptation of all time with over 20 seasons and 1,000 episodes in 192 countries. The Pokémon Trading Card Game is the highest-selling trading card game of all time with over 43.2 billion cards sold. In addition, the Pokémon franchise includes the world's top-selling toy brand, an anime film series, a live-action film , books, manga comics, music, merchandise, and a temporary theme park. The franchise is also represented in other Nintendo media, such as the Super Smash Bros. series, where various Pokémon characters appear as both playable and non-playable characters.</p>
      </section>
    </>
  )
}

export default Home