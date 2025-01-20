import Colors from "@/constants/colors";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 60;
  background-color: ${() => Colors.background};
  flex-direction: "row";
  align-items: "center";
  padding-left: 7;
  padding-right: 7;
`;

export const Icon = styled.Text`
  color: ${() => Colors.white};
  font-size: 24;
  margin-right: 10;
`;

export const Title = styled.Text`
  color: ${() => Colors.white};
  font-size: 18;
  font-weight: "bold";
`;
