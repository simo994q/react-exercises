import style from './Exercise_5.module.scss'

export function Exercise_5 () {

    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    return (
        <div className={style.container}>
            <ul>
                {animals.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}