import "./Form.css";
import { InputText } from "../InputText";
import { List } from "../List";
import { Button } from "../Button";

export const Form = () => {
  const times = ["Programação", "Front", "back", "fullStack"];

  return (
    <section className="form">
      <form>
        <h2>Preencha o formulario para criar o Card</h2>
        <InputText label="Nome" placeholder="Digite seu Nome" />
        <InputText label="Cargo" placeholder="Digite seu Cargo" />
        <InputText label="Imagem" placeholder="Digite seu Endereço" />
        <List label="Time" itens={times} />
        <Button text="Criar Card" />
      </form>
    </section>
  );
};
