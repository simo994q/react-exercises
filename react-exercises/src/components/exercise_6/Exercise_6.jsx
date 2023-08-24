import style from './Exercise_6.module.scss'
import { AnimalList } from './AnimalList.jsx'

export function Exercise_6 () {



    return (
        <div className={style.container}>
            <AnimalList list={animals}/>
        </div>
    )
}