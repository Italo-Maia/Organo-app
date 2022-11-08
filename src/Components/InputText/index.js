
import "./InputText.css";

export const InputText = (props) => {

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={props.changed} required= {props.required} placeholder={props.placeholder}/>
        </div>
    )
}
