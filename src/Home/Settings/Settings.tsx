import React from "react";

import { Box } from "../../components";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { HomeNavigationProps } from "../../components/Navigation";

import Notification from "./Notification";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Content>
      <Box backgroundColor="background">
        <Header
          title="Settings"
          left={{
            icon: "arrow-left",
            onPress: () => navigation.openDrawer(),
          }}
          right={{ icon: "home", onPress: () => navigation.navigate("OutfitIdeas") }}
        />
        <Box padding="m">
        <Notification
            title="Mode Dark"
            description="Change theme to dark"
          />
          <Notification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <Notification
            title="Discounts & Sales"
            description="Buy the stuff you love for less"
          />
          <Notification
            title="Stock Notification"
            description="If the product you love comes back in stock"
          />
          <Notification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </Content>
  );
};

export default Settings;