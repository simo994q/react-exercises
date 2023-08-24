import { useState } from 'react'
import style from './Exercise_4.module.scss'

export function Exercise_4 () {

    const [buttonClicks, setButtonClicks] = useState(0)

    return (
        <div className={style.container}>
            <p>Button has been clicked {buttonClicks} times</p>
            <button onClick={() => setButtonClicks(buttonClicks + 1)}>Click me</button>
        </div>
    )
}