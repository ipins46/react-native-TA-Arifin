import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Button } from '../../components';

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
  const insets = useSafeAreaInsets();
  
  return (
    <Box backgroundColor="bawah5" padding="m">
      <Box alignItems="center" style={{ paddingBottom: insets.bottom }}>
        <Button variant="tombol" {...{ label, onPress }} />
      </Box>
    </Box>
  )
}

export default Footer;