import { Exercise_3_button } from './Exercise_3_button'

export function Exercise_3 () {
    return (
        <div className={style.container}>
            <Exercise_3_button number={1}/>
            <Exercise_3_button number={2}/>
            <Exercise_3_button number={3}/>
        </div>
    )
}