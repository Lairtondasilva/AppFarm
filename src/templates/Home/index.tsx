import Header from "../../components/Header";
import * as Styled from "./styles";
import AnimalCardContainer from "../../components/AnimalCardContainer";
import { mock } from "../../components/AnimalCardContainer/mock";
import ProcedureCard from "../../components/ProcedureCard";

export default function Home() {
  return (
    <>
      <Header arrow={false}>Home</Header>
      <Styled.ScrollView>
        <Styled.ScrollViewContainer>
          <AnimalCardContainer AnimalCardInfoList={mock} />
          <ProcedureCard />
        </Styled.ScrollViewContainer>
      </Styled.ScrollView>
    </>
  );
}
