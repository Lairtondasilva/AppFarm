import * as Styled from "./styles";

import Header from "../../components/Header";
import CardSelect from "../../components/CardSelect";
import { useState } from "react";
import { genderOptions, statusOptions } from "./utils";

const RegisterAnimal = () => {
  const [gender, setGender] = useState("");

  return (
    <>
      <Header arrow={true}>Cadastrar</Header>
      <Styled.Container>
        <Styled.Text>Nome:</Styled.Text>
        <Styled.Input />
        <Styled.Text>Marcação:</Styled.Text>
        <Styled.Input />
        <Styled.Text>Sexo:</Styled.Text>
        <CardSelect
          cardsOptions={genderOptions}
          active=""
          onPress={(option: string) => {
            setGender(option);
          }}
        />
        <Styled.Text>Status:</Styled.Text>
        <CardSelect
          cardsOptions={statusOptions}
          active=""
          onPress={(option: string) => {
            setGender(option);
          }}
        />
      </Styled.Container>
    </>
  );
};

export default RegisterAnimal;
