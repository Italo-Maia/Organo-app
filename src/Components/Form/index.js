import "./Form.css";
import { InputText } from "../InputText";
import { List } from "../List";
import { Button } from "../Button";
import { useState } from "react";

export const Form = () => {
  const [name, SetName] = useState("");
  const [cargo, SetCargo] = useState("");
  const [imagem, SetImagem] = useState("");
  const [time, SetTime] = useState("");


  const times = ["Programação", "Front", "back", "fullStack"];

  const Saved = (e) => {
    e.preventDefault();
    console.log(name, cargo, imagem, time)
  };

  return (
    <section className="form">
      <form onSubmit={Saved}>
        <h2>Preencha o formulario para criar o Card</h2>
        <InputText
          label="Nome"
          required={true}
          placeholder="Digite seu Nome"
          value={name}
          changed={e => SetName(e.target.value)}
          
        />
        <InputText
          label="Cargo"
          required={true}
          placeholder="Digite seu Cargo"
          value={cargo}
          changed={e => SetCargo(e.target.value)}
        />

        <InputText 
          label="Imagem" 
          placeholder="Digite seu Endereço"
          value={imagem}
          changed={e => SetImagem(e.target.value)}
        />
        <List required={true} 
          label="Time" 
          itens={times} 
          value={time}
          changed={value => SetTime(value)}
        />
        <Button text="Criar Card" />
      </form>
    </section>
  );
};
