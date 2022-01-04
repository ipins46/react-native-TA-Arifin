import React from "react";
import { Dimensions, Image } from "react-native";
import { HomeNavigationProps } from "../../components/Navigation";
import { DrawerActions } from "@react-navigation/native";
import { Box, Text, useTheme } from "../../components";
import Header from "../../components/Header";

import Tabs from "./Tabs";
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";

const { width } = Dimensions.get("window");
const tabs = [
  { id: "config", title: "Configuration" },
  { id: "info", title: "Personal Info" },
];
const picture = {
  src: require('./assets/wolf.png'),
  width: 510,
  height: 600,
}

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={-15}
          // borderBottomRightRadius="xl"
          backgroundColor="bawah4"
        >
          <Header
            title="Edit Profile"
            left={{
              icon: "menu",
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          left={width / 2 - 50}
          top={-35}
          backgroundColor="bawah5"
          style={{ borderRadius: 50 }}
          width={90}
          height={90}
        >
          <Image 
            source={picture.src}
            style={{ 
              width: width - theme.borderRadii.xxl, 
              height: ((width - theme.borderRadii.xxl) * picture.height) / picture.width,
              top: 5,
              left: 10,
            }}
          />
        </Box>
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }} >
          <Text variant="title1" textAlign="center">
            Muhamad Arifin
          </Text>
          <Text variant="body" textAlign="center">
            admin@admin.com
          </Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;