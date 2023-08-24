import style from './Exercise_2.module.scss'

export function Exercise_2 () {

    function alerted() {
        alert('Clicked')
    }

    return (
        <div className={style.container}>
            <button onClick={() => alerted()}>Click me</button>
        </div>
    )
}