import React from "react";

import { Dimensions, Image, ScrollView } from 'react-native';
import { Box, Text, useTheme } from "../../components";
import SwipeableRow from "./SwipeableRow";

interface ItemProps {
  onDelete: () => void;
  item: any
}

const { width } = Dimensions.get('window');
const picture = {
  src: require('./assets/c3.png'),
  width: 590,
  height: 640,
}

const Item = ({ onDelete, item }: ItemProps) => {
  const theme = useTheme();
  const height = 120 + theme.spacing.m * 2;
  return (
    <ScrollView>
    <SwipeableRow onDelete={onDelete} height={height} >
      <Box flexDirection="row" padding="m">
        <Box
          width={120}
          height={120}
          borderRadius="m"
          style={{ backgroundColor: "#BFEAF5" }}
          bottom={0}
        >
          <Image 
            source={picture.src}
            style={{ 
              width: width - theme.borderRadii.xxl, 
              height: ((width - theme.borderRadii.xxl) * picture.height) / picture.width,
              top: 20,
              left: 25,
            }}
          />
        </Box>
        <Box padding="m" flex={1} justifyContent="center">
        <Text variant="title3" >
            {item.name}
          </Text>
          <Text variant="header" color="info" marginBottom="s">
            {item.size}
          </Text>
          <Text variant="title3" color="bawah5">
            {item.price}
          </Text>
        </Box>
        <Box justifyContent="center">
          <Box
            backgroundColor="secondary"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          >
            <Text variant="header" color="background">
              x2
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRow>
    </ScrollView>
  );
};

export default Item;