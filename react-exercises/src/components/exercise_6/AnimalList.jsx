import style from './Exercise_6.module.scss'

export function AnimalList(props) {
    return (
        <div>
            {props.list.map((item, index) => {
                return (
                    <div className={style.itemContainer} key={index}>
                        <img src={item.icon} alt="" />
                        <p>{item.name}</p>
                    </div>
            )
            })}
        </div>
    )
}