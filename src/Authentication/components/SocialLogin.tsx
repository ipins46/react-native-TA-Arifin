import React, { ReactNode } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { Box, useTheme } from '../../components';

const Facebook = () => (
    <Svg
      viewBox="0 0 512 512"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeMiterlimit={2}
    >
      <Path
        d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256z"
        fill="#1877f2"
      />
      <Path
        d="M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z"
        fill="#fff"
      />
    </Svg>
)

const Twitter = () => (
  <Svg
    viewBox="0 0 512 512"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeMiterlimit={2}
  >
    <Circle cx={256} cy={256} r={256} fill="#1da1f2" />
    <Path
      d="M209.152 391.04c113.536 0 175.616-94.08 175.616-175.616 0-2.688 0-5.376-.128-7.936a126.45 126.45 0 0030.848-32c-11.008 4.864-22.912 8.192-35.456 9.728 12.8-7.68 22.528-19.712 27.136-34.176A124.989 124.989 0 01368 166.016c-11.264-12.032-27.264-19.456-45.056-19.456-34.048 0-61.696 27.648-61.696 61.696 0 4.864.512 9.6 1.664 14.08-51.328-2.56-96.768-27.136-127.232-64.512a61.916 61.916 0 00-8.32 30.976 61.446 61.446 0 0027.52 51.328c-10.112-.256-19.584-3.072-27.904-7.68v.768c0 29.952 21.248 54.784 49.536 60.544a61.529 61.529 0 01-16.256 2.176 58.93 58.93 0 01-11.648-1.152c7.808 24.576 30.592 42.368 57.6 42.88-21.12 16.512-47.744 26.368-76.672 26.368-4.992 0-9.856-.256-14.72-.896 27.008 17.664 59.52 27.904 94.336 27.904"
      fill="#fff"
      fillRule="nonzero"
    />
  </Svg>
)

const Google = () => (
  <Svg height={30} viewBox="0 0 512 512" width={30} fill="none">
      <Path
          d="M468.99 224.42c2.04 11.27 3.46 22.09 3.46 36.73 0 68.899-25.9 126.89-70.261 165.189l-58.54-58.54c25.94-20.88 37.86-49.21 40.801-67.71h-114.9v-75.67h199.44z"
          fill="#3b7ded"
      />
      <Path
          d="M407.07 93.57l-59.881 57.58c-65.359-63.07-177.6-33.98-212.97 49.22L73 139.15C111.87 77.14 180.81 36 259.55 36c59.25 0 109.11 21.74 147.52 57.57z"
          fill="#e43e2b"
      />
      <Path
          d="M343.649 367.8l58.54 58.54C365.74 457.82 316.81 476 259.55 476c-76.15 0-143.13-38.48-182.61-97.09l60.71-60.71c22.45 45.5 68.721 76.72 121.9 76.72 37.33 0 64.65-11.47 84.099-27.12z"
          fill="#2ba24c"
      />
      <Path
          d="M137.649 318.2l-60.71 60.71C53.32 343.84 39.55 301.56 39.55 256c0-42.97 12.25-83.02 33.45-116.85l61.22 61.22c-7.03 16.51-11.02 35.15-11.02 55.63 0 22.36 5.21 43.49 14.449 62.2z"
          fill="#f0b501"
      />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;

  return(
    <Box 
      marginHorizontal="s"
      backgroundColor="background" 
      width={SIZE} 
      height={SIZE} 
      borderRadius="l" 
      justifyContent="center" 
      alignItems="center"
    >
      {children}
    </Box>
  )
}

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon><Facebook /></SocialIcon>
      <SocialIcon><Google /></SocialIcon>
      <SocialIcon><Twitter /></SocialIcon>
    </Box>
  )
}

export default SocialLogin;