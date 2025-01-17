import styled from "styled-components/native";

interface IColor {
  dark?: boolean;
}

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #001534;
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
  color: #fafafb;
`;

export const ButtonText = styled.Text<IColor>`
  font-family: "Courier New";
  font-weight: bold;
  font-size: 20px;
  color: ${(props: IColor) => (props.dark ? "#002254" : "#FAFAFB")};
`;

export const Button = styled.TouchableOpacity<IColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
  width: 70%;
  height: 50px;
  background-color: ${(props: IColor) => (props.dark ? "#002254" : "#FAFAFB")};
`;

export const Input = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
  width: 70%;
  height: 50px;
  background-color: #fafafb;
`;
