


export function Exercise_3_button (props) {

    function buttonClick (number) {
        alert('You clicked button ' + number)
    }

    return (
        <div>
            <button onClick={() => buttonClick(props.number)}>Button {props.number}</button>
        </div>
    )
}