//import React from 'react'
import { useNavigate } from 'react-router'




function Homepage() {

  const navigate = useNavigate()

  return (
    <header className='header-container'>
      <h1>PokeFight</h1>
      <nav>
        <ul className='header-ul'>
          <li><a href="/">Home</a></li>
          <li><a href="/pokemon">Choose your Pokemon</a></li>
          <li><a href="/fight">Fight</a></li>
        </ul>
        <div className='w-72 h-72 bg-gray-500'></div>
      </nav>
    

      <div className='homepage'>
        <h1>Welcome to PokeFight!</h1>
        <p>Gotta fight them all!</p>
        <p>Press FIGHT to start!</p>
        <button onClick={() => navigate('/chooseYourPokemon')}>FIGHT !</button>
      </div>
    </header>
  )
}

export default Homepage