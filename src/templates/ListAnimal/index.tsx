import { useEffect, useState, useContext } from "react";

import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import * as Styled from "./styles";
import { ApiContext } from "../../context/ApiContext";
import { AnimalList } from "../../components/AnimalList";

const ListAnimal = () => {
  const { state } = useContext(ApiContext);

  return (
    <>
      <Header arrow={true}>{state.specieSelected + "s"}</Header>
      <Styled.Container>
        <SearchInput value="" onChange={() => {}} />
        <AnimalList animals={state.animals} />
      </Styled.Container>
    </>
  );
};

export default ListAnimal;
