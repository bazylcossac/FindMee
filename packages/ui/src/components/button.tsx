"use client";

import { ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type ButtonProps = {
  children: ReactNode;
  appName: string;
};

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <Pressable
      onPress={() => alert(`Hello from your ${appName} app!`)}
      style={styles.button}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
});
