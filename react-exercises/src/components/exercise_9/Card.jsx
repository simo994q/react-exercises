import style from './Exercise_9.module.scss'

export function Card(props) {

    return (
        <div className={style.cardMasterWrapper}>
            <div className={style.cardInnerWrapper}>
                <div className={style.cardWrapperFront}>
                    <img src={props.avatar} />
                    <p>{props.firstName} {props.lastName}</p>
                    <p>{props.title}</p>
                    <p>{props.keySkill}</p>
                </div>
                <div className={style.cardWrapperBack}>
                    <p>City: {props.city}</p>
                    <p>Street name: {props.streetName}</p>
                    <p>State: {props.state}</p>
                    <p>Country: {props.country}</p>
                </div>
            </div>
        </div>


    )

}