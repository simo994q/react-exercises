import style from './Exercise_6.module.scss'
import { AnimalList } from './AnimalList.jsx'

import cat from './assets/cat.svg'
import chicken from './assets/chicken.svg'
import cow from './assets/cow.svg'
import dog from './assets/dog.svg'
import horse from './assets/horse.svg'
import sheep from './assets/sheep.svg'

export function Exercise_6 () {

    ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    const animals = [
        {name: 'cat', icon: cat},
        {name: 'chicken', icon: chicken},
        {name: 'cow', icon: cow},
        {name: 'dog', icon: dog},
        {name: 'horse', icon: horse},
        {name: 'sheep', icon: sheep}
    ]

    return (
        <div className={style.container}>
            <AnimalList list={animals}/>
        </div>
    )
}