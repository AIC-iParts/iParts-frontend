import { Dimensions } from "react-native";

const hp = (value: string) => {
  const number = parseFloat(value.replace("%", "").trim()) / 100 || 0;
  return Dimensions.get("screen").height * number;
};

const wp = (value: string) => {
  const number = parseFloat(value.replace("%", "").trim()) / 100 || 0;
  return Dimensions.get("screen").width * number;
};

export { hp, wp };
