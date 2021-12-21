import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "../../components";


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
})

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
  // label: string;
  // variant: string;
}

const Subslide = ({subtitle, description, last, onPress}: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button 
        label={last ? "Let's get started" : "Next"} 
        variant={last ? "primary" : "default"} 
        {...{onPress}}
      />
    </View>
  );
}

export default Subslide;