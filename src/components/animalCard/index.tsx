import { TouchableOpacity } from "react-native";
import { AnimalCardProps } from "./interfaces";
import * as Styled from "./styles";
import React, { useContext } from "react";
import NavigationContext from "../../context/NavigationContext";

const AnimalCard = ({ title, urlImage, pageUrl, id }: AnimalCardProps) => {
  const navigate = useContext(NavigationContext);
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(pageUrl);
      }}
      activeOpacity={0.9}
    >
      <Styled.Container>
        <Styled.Image
          source={{
            uri: urlImage,
          }}
        />
        <Styled.Text>{title}</Styled.Text>
      </Styled.Container>
    </TouchableOpacity>
  );
};

export default AnimalCard;
