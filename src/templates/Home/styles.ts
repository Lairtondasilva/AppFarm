import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: #f5f5f5;
  `}
`;

export const ScrollView = styled.ScrollView`
  height: 50%;
  /* border: 2px solid black; */
`;

export const CardContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
    padding: 0 ${wp(8)}px;
    gap: 20px;
    flex: 1;
    padding-top: ${hp(10)}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 48px;
    color: black;
  `}
`;
