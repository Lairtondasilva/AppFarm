import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
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
