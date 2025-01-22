import Colors from "@/constants/colors";
import { hp, wp } from "@/utils/responsiveDimensions";
import styled from "styled-components/native";

export const Body = styled.View`
  display: flex;
  align-items: center;
  width: ${wp("100%")}px;
  height: ${hp("100%")}px;
  background-color: ${() => Colors.background};
`;

export const Container = styled.ScrollView`
  display: flex;
  width: 80%;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: "Courier New";
  font-weight: bold;
  font-size: ${wp("7%")}px;
  color: ${() => Colors.white};
  margin: 10px;
`;

export const Line = styled.View`
  width: 100%;
  border: 0.2px solid ${() => Colors.white};
  margin-top: ${hp("1%")}px;
  margin-bottom: ${hp("1%")}px;
`;

export const TextNormal = styled.Text`
  font-family: "Courier New";
  font-size: ${wp("5%")}px;
  color: ${() => Colors.white};
  margin: 10px;
`;

export const TextSmall = styled.Text`
  font-family: "Courier New";
  font-size: ${wp("3.1%")}px;
  color: ${() => Colors.white};
`;

export const CardPedido = styled.View`
  display: "flex";
  width: ${wp("45%")}px;
  height: ${hp("14%")}px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${() => Colors.cards};
  margin-left: 10px;
`;

export const TextPrice = styled.Text`
  font-family: "Courier New";
  font-size: ${wp("5%")}px;
  font-weight: bold;
  margin-top: 10px;
  color: ${() => Colors.white};
`;

export const TextDetails = styled.Text`
  font-family: "Courier New";
  font-size: ${wp("3.1%")}px;
  font-weight: bold;
  color: ${() => Colors.white};
  margin-top: 20px;
`;

export const TextExtraBoldPrice = styled.Text`
  font-family: "Courier New";
  font-size: ${wp("12%")}px;
  font-weight: bold;
  color: ${() => Colors.white};
  margin: 10px;
`;

export const CardVenda = styled.View`
  display: flex;
  flex-direction: row;
  height: ${hp("5%")}px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  background-color: ${() => Colors.white};
  justify-content: space-around;
  margin-top: 8px;
`;
