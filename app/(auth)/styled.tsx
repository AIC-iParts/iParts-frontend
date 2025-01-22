import Colors from "@/constants/colors";
import { hp, wp } from "@/utils/responsiveDimensions";
import styled from "styled-components/native";

interface IColor {
  dark?: boolean;
}

interface ISection {
  flex?: number;
  justify_content?: string;
  height?: string;
  color?: string;
  align_items?: string;
}

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${wp("100%")}px;
  height: ${hp("100%")}px;
  background-color: ${() => Colors.background};
`;

export const Logo = styled.Image`
  width: 240px;
  height: 235px;
  margin: 20px;
`;

export const Title = styled.Text`
  font-family: "Courier New";
  font-weight: bold;
  font-size: ${wp("9%")}px;
  color: ${() => Colors.white};
`;

export const ButtonText = styled.Text<IColor>`
  font-family: "Courier New";
  font-weight: bold;
  font-size: ${wp("4.5%")}px;
  color: ${(props: IColor) => (props.dark ? Colors.background : Colors.white)};
`;

export const Button = styled.TouchableOpacity<IColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: ${wp("4%")}px;
  width: ${wp("70%")}px;
  height: ${hp("5%")}px;
  background-color: ${(props: IColor) =>
    props.dark ? Colors.buttons : Colors.white};
`;

export const Input = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: ${wp("70%")}px;
  height: ${hp("5%")}px;
  margin: ${wp("5%")}px;
  background-color: ${() => Colors.white};
`;

export const Section = styled.View<ISection>`
  display: flex;
  flex: ${(props: ISection) => (props.flex ? props.flex : 1)};
  align-items: ${(props: ISection) =>
    props.align_items ? props.align_items : "center"};
  height: ${(props: ISection) => (props.height ? props.height : hp("5%"))}px;
  justify-content: ${(props: ISection) =>
    props.justify_content ? props.justify_content : "center"};
  width: ${wp("100%")}px;
  background-color: ${(props: ISection) => (props.color ? props.color : "")};
`;

export const TextSmall = styled.Text<IColor>`
  font-family: "Courier New";
  font-size: ${wp("3.5%")}px;
  color: ${(props: IColor) => (props.dark ? Colors.background : Colors.white)};
`;

export const SemiTitle = styled.Text`
  font-family: "Courier New";
  font-weight: lighter;
  font-size: ${wp("6%")}px;
  color: ${() => Colors.white};
`;

export const Line = styled.View`
  width: ${wp("70%")}px;
  border: 1px solid ${() => Colors.white};
  margin-top: ${hp("1%")}px;
  margin-bottom: ${hp("1%")}px;
`;
