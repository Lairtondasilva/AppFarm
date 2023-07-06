import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: ${wp(37)}px;
    height: ${hp(24)}px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #cebebe;
    background: #fff;
    border-radius: 10px;
    elevation: 20;
  `}
`;

export const Image = styled.Image`
  width: ${wp(30)}px;
  height: ${hp(14)}px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
