import {React, useState } from 'react';
import axios from 'axios';

function ShowJokes() {
    const [setup, setSetup] = useState('no jokes yet!');
    const [punchline, setPunchline] = useState('press the button!');

    const [errorMassage, setErrorMassage] = useState('');


    async function getJoke() {
        try {
            const res = await axios.get('http://localhost:3001/') 
            setSetup([res.data.setup]);
            setPunchline([res.data.punchline]);
        }
        catch (error) {
            console.log(error);
            setErrorMassage(error.Error);
        }
    }

    return (

        <div>
            <h1>Site Of Jokes</h1>
            <div style={{textAlign:"center", border:"2px solid black", width:"70%", margin:"auto"}}>
            <h1>{setup}</h1>
        <h3>{punchline}</h3>
            </div>
            <button onClick={getJoke} styles={{}}>
                Get Joke!
            </button>
            <p>{errorMassage}</p>
        </div>
    );
}

export default ShowJokes;
