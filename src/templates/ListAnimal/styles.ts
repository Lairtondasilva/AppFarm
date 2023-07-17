import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 ${wp(8)}px;
    margin: 22px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${hp(4)}px;
  `}
`;
