import Colors from "@/constants/colors";
import { hp, wp } from "@/utils/responsiveDimensions";
import styled from "styled-components/native";

interface IFocus {
  onFocus?: boolean;
  isLogout?: boolean;
}

export const Container = styled.View`
  display: flex;
  width: 100%;
  background-color: ${() => Colors.menubar};
  height: ${hp("5%")}px;
  margin-left: ${wp("2%")}px;
  justify-content: center;
`;

export const Title = styled.Text<IFocus>`
  color: ${(props: IFocus) =>
    props?.isLogout
      ? Colors.red
      : props?.onFocus
      ? Colors.bluelight
      : Colors.white};
  font-size: ${wp("5%")}px;
`;
