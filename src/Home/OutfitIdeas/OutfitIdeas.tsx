import React, { useState } from "react";
// import { sub } from "react-native-reanimated";
import { useTiming } from "react-native-redash";

import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Background from "./Background";
import Categories from "./Categories";
import Card from "./Card";

const cards = [
  { index: 3, source: require("../../Authentication/assets/c1.png") },
  { index: 2, source: require("../../Authentication/assets/c2.png") },
  { index: 1, source: require("../../Authentication/assets/c3.png") },
  { index: 0, source: require("../../Authentication/assets/c1.png") },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedIndex = useTiming(currentIndex);

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-cart', onPress: () => navigation.navigate("Cart") }}
        // right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                index={index}
                animatedIndex={animatedIndex}
                step={step}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{ source }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;