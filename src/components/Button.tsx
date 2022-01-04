import React from "react";
import { StyleSheet } from "react-native";
import { Text, useTheme } from "./Theme";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  variant: "default" | "tombol";
  label?: string;
  onPress: () => void;
  style?: RectButtonProperties["style"];
}

const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === "tombol" ? colors.tombol : colors.primary;
  const color = variant === "tombol" ? colors.bawah3 : colors.background;

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;