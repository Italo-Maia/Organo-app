import "./List.css";

export const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select onChange={event => props.changed(event.target.value)} required={props.required}>
        {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};
