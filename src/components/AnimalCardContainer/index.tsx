import AnimalCard from "../AnimalCard";
import { AnimalCardContainerProps } from "./interfaces";
import * as Styled from "./styles";

const AnimalCardContainer = ({
  AnimalCardInfoList,
}: AnimalCardContainerProps) => {
  return (
    <Styled.Container>
      {AnimalCardInfoList.map(({ urlImage, title, pageUrl, id }) => (
        <AnimalCard
          key={id}
          id={id}
          urlImage={urlImage}
          title={title}
          pageUrl={pageUrl || "Animals"}
        />
      ))}
    </Styled.Container>
  );
};

export default AnimalCardContainer;
