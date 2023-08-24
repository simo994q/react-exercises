import { useState } from 'react'
import style from './Exercise_7.module.scss'

export function Exercise_7 () {

    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')

    return (
        <div className={style.container}>
            <input type="text" placeholder='Firstname' onChange={(event) => {
                setFirstName(event.target.value)
            }}/>
            <input type="text" placeholder='Lastname' onChange={(event) => {
                setLastName(event.target.value)
            }}/>
            <button onClick={() => alert(`Greetings ${firstName} ${LastName}`)}>Greet me</button>
        </div>
    )
}