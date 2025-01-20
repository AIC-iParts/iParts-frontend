import Colors from "@/constants/colors";
import { hp, wp } from "@/utils/responsiveDimensions";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${hp("10%")}px;
  background-color: ${() => Colors.background};
  flex-direction: "row";
  align-items: "center";
  padding-left: 7;
  padding-right: 7;
`;

export const Icon = styled.Text`
  color: ${() => Colors.white};
  font-size: ${wp("3.5%")}px;
  margin-right: ${wp("1%")}px;
`;

export const Title = styled.Text`
  color: ${() => Colors.white};
  font-size: ${wp("2%")}px;
  font-weight: "bold";
`;
