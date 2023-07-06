import Header from "../../components/Header";
import * as Styled from "./styles";
import AnimalCardContainer from "../../components/AnimalCardContainer";
import { mock } from "../../components/AnimalCardContainer/mock";

export default function Home() {
  return (
    <Styled.Container>
      <Header arrow={false}>Home</Header>
      <Styled.ScrollView>
        <AnimalCardContainer AnimalCardInfoList={mock} />
      </Styled.ScrollView>
    </Styled.Container>
  );
}
