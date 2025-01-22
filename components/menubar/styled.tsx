import Colors from "@/constants/colors";
import { hp, wp } from "@/utils/responsiveDimensions";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${hp("8%")}px;
  background-color: ${() => Colors.background};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${wp("5%")}px;
  padding-right: ${wp("5%")}px;
`;

export const Icon = styled.Text`
  color: ${() => Colors.white};
  font-size: ${wp("6%")}px;
  margin-left: ${wp("5%")}px;
`;

export const Title = styled.Text`
  color: ${() => Colors.white};
  font-size: ${wp("5%")}px;
  font-weight: bold;
`;
