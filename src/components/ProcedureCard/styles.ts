import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    height: ${hp(18)}px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: ${wp(3)}px;
    flex: 1;
    border-radius: 10px;
    elevation: 20;
  `}
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
