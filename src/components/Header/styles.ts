import { styled, css } from "styled-components/native";
import { NavbarProps } from "./interfaces";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 ${hp(3)}px;
    background-color: ${theme.colors.primary};
    height: ${hp(15)}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: ${hp(3)}px;
  `}
`;

export const Navbar = styled.View<NavbarProps>`
  ${({ theme, arrow }) => css`
    height: ${hp(6)}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: ${arrow ? hp(3) + "px" : "0"};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${hp(4.5)}px;
    color: white;
    font-weight: bold;
  `}
`;
