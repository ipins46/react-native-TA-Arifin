import React from 'react';
import { Image, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Text, Button, useTheme } from '../components';
import { AuthNavigationProps } from '../components/Navigation';

const { width } = Dimensions.get('window');
const picture = {
  src: require('./assets/sale.png'),
  width: 400,
  height: 600
}

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
  
  return (
    <Box flex={1} backgroundColor="bawah5">
      <Box 
        flex={1} 
        borderBottomRightRadius="xl" 
        backgroundColor="background2"
        alignItems="center"
        justifyContent="flex-end"
      >
      <Image 
        source={picture.src}
        style={{ 
          width: width - theme.borderRadii.xl, 
          height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          top: 30
        }}
      />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box 
          backgroundColor="background2" 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0}
        />
        <Box 
          flex={1} 
          backgroundColor="bawah5" 
          borderTopLeftRadius="xl" 
          justifyContent="space-evenly" 
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2" color="background">Let's get started</Text>
          <Text variant="body" color="background" textAlign="center">
              Login to your account below or signup for an amazing experience
          </Text>
          <Button 
            variant="tombol" 
            label="Have an account? Login" 
            onPress={() => navigation.navigate("Login")}
          />
          <Button 
            variant="tombol"
            label="Join us, it's Free" 
            onPress={() => navigation.navigate("SignUp")}
          />
          <BorderlessButton 
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="background">Forgot password?</Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;