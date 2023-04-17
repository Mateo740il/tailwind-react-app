import React from 'react'
import erorrPhoto from '../assets/error-page.png'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='max-w-5xl mt-12 mx-auto flex flex-col gap-6 justify-center items-center'>
       <img className='w-1/2 rounded-3xl shadow-xl' src={erorrPhoto} alt='not found'/>
        <NavLink className='text-teal-500 text-3xl hover:text-teal-400' to='/'>Back Home</NavLink>
    </div>
  )
}

export default NotFound