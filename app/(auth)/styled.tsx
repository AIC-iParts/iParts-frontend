import Colors from "@/constants/colors";
import styled from "styled-components/native";

interface IColor {
  dark?: boolean;
}

interface ISection {
  flex?: number;
  justify_content?: string;
}

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  font-size: 36px;
  color: ${() => Colors.white};
`;

export const ButtonText = styled.Text<IColor>`
  font-family: "Courier New";
  font-weight: bold;
  font-size: 20px;
  color: ${(props: IColor) => (props.dark ? Colors.background : Colors.white)};
`;

export const Button = styled.TouchableOpacity<IColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
  width: 70%;
  height: 50px;
  background-color: ${(props: IColor) =>
    props.dark ? Colors.buttons : Colors.white};
`;

export const Input = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 70%;
  height: 50px;
  margin: 20px;
  background-color: ${() => Colors.white};
`;

export const Section = styled.View<ISection>`
  display: flex;
  flex: ${(props: ISection) => (props ? props.flex : 1)};
  align-items: center;
  justify-content: ${(props: ISection) =>
    props ? props.justify_content : "center"};
  width: 100%;
`;
