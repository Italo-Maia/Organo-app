import "./Button.css";

export const Button = (props) => {
    return (
        <div >
            <button className="button">{props.text}</button>
        </div>
    )
}