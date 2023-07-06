import { TouchableOpacity } from "react-native";
import { HeaderProps } from "./interfaces";
import * as Styled from "./styles";
import { CaretLeft } from "phosphor-react-native";

const Header = ({ children, arrow = false }: HeaderProps) => {
  return (
    <Styled.Container>
      {arrow ? (
        <TouchableOpacity>
          <CaretLeft color="white" weight="bold" size={32} />
        </TouchableOpacity>
      ) : (
        ""
      )}
      <Styled.Navbar arrow={arrow}>
        <Styled.Text>{children}</Styled.Text>
      </Styled.Navbar>
    </Styled.Container>
  );
};

export default Header;
