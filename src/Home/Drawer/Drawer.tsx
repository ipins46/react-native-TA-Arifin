import React, { useContext } from 'react';
import { Dimensions, Image } from 'react-native';
import { useNavigation, DrawerActions, CommonActions } from '@react-navigation/native';

import { Box, Text, useTheme } from '../../components';
import Header from '../../components/Header';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import { HomeScreenProp } from '../../components/Navigation';
import { AuthContext } from '../../Context/context';

export const assets = [require("./assets/drawer.png")];
const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 769 / 1531;
const height = DRAWER_WIDTH * aspectRatio;



const picture = {
  src: require('./assets/wolf.png'),
  width: 510,
  height: 600,
}

const Drawer = () => {
  const {signOut} = useContext(AuthContext);

  const items: DrawerItemProps[] = [
    // { icon: "home", label: "fashion shopping", screen: "HomeItems", color: "primary" },
    { icon: "home", label: "Outfit Ideas", screen: "OutfitIdeas", color: "primary" },
    { icon: "heart", label: "Favorite Me", screen: "FavoriteOutfits", color: "drawer1" },
    { icon: "user", label: "Edit Profile", screen: "EditProfile", color: "drawer2" },
    { icon: "clock", label: "Transaction History", screen: "TransactionHistory", color: "drawer3" },
    { icon: "settings", label: "Settings", screen: "Settings", color: "drawer4" },
    { icon: "log-out", label: "Logout", 
    onPress: (navigation) => {
      signOut()
      }, color: "secondary", 
    },
  ]

  const theme = useTheme();
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="background">
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          // borderBottomLeftRadius="xl"
          // borderBottomRightRadius="xl"
          backgroundColor="bawah4"
        >
          <Header 
            title="Menu"
            left={{ icon: 'x', onPress: () => navigation.dispatch(DrawerActions.closeDrawer()) }}
            right={{ icon: 'shopping-cart', onPress: () => navigation.navigate("Cart") }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="bawah4" />
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          borderBottomRightRadius="xl"
          borderBottomLeftRadius="xl"
          backgroundColor="background"
          justifyContent="center"
          padding="xl"
        >
          <Box 
            position="absolute" 
            left={DRAWER_WIDTH / 2 - 45} 
            top={-50} 
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
          <Box marginVertical="m">
            <Text marginTop="l" variant="title1" textAlign="center">Muhamad Arifin</Text>
            <Text variant="body" textAlign="center">admin@admin.com</Text>
          </Box>
          {items.map(item => <DrawerItem key={item.icon} {...item} />)}
        </Box>
      </Box>
      <Box 
        backgroundColor="background" 
        width={DRAWER_WIDTH} 
        overflow="hidden"
        height={height * 0.61} 
        right={0}
      >
        <Image 
          source={assets[0]}
          style={{ 
            width: DRAWER_WIDTH, 
            height, 
            borderTopLeftRadius: theme.borderRadii.l
          }}
        />
      </Box>
    </Box>
  )
}

export default Drawer;