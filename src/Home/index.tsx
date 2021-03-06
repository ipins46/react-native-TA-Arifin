import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
export { assets } from "./Drawer";

import HomeItems from "./HomeItems";
import OutfitIdeas from "./OutfitIdeas/OutfitIdeas";
import FavoriteOutfits from "./FavoriteOutfits";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import Cart from "./Cart";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <DrawerContent />}
    screenOptions={{
      drawerStyle: { width: DRAWER_WIDTH },       
        headerShown: false
    }}
  >
    <Drawer.Screen name="HomeItems" component={HomeItems} />
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
    <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Cart" component={Cart} />
  </Drawer.Navigator>
);