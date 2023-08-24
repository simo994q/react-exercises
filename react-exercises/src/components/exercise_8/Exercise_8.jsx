import { useEffect, useState } from 'react'
import style from './Exercise_8.module.scss'

export function Exercise_8() {

    const URL = 'https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10'

    const [jokeData, setJokeData] = useState()

    useEffect(() => {
        fetch(URL).then(res => res.json()).then(data => setJokeData(data))
    }, [])

    useEffect(() => {
        console.log(jokeData);
    }, [jokeData])

    return (
        <div className={style.container}>
            {jokeData.jokes.map((joke, index) => {
                return (
                    <div key={index}>
                        <p>{joke.setup}</p>
                        <p>{joke.delivery}</p>
                    </div>
                )
            })}
        </div>
    )
}