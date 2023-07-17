import { Animals } from "../../templates/ListAnimal/interfaces";
import { calculateAge } from "../../utils/calculateAge";
import * as Styled from "./styles";

const AnimalListItem = ({ name, birth, marking }: Animals) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image
          source={{ uri: "https://imgur.com/mZf2gJB.png" }}
          resizeMode="cover"
        />
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.CardHeader>
          <Styled.Text>{name}</Styled.Text>
          <Styled.Text>{calculateAge(birth)}</Styled.Text>
        </Styled.CardHeader>
        <Styled.Text>{"# " + marking}</Styled.Text>
      </Styled.Content>
    </Styled.Container>
  );
};

export default AnimalListItem;
