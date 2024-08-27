import React, { useState } from 'react';
import './Joke.css';

const Joke = () => {

    const [Joke, setJoke] = useState('')

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
         .then( (res) => res.json() )
         .then ( (data) => setJoke(data.joke) );
    };

  return (
    <div className='joke'>

        <button onClick = {fetchApi}> Click to Generate a Joke </button>

        <p> {Joke} </p>
 
    </div>
  )
}

export default Joke