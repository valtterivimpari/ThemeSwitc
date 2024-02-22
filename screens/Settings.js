import React from 'react';
import { View, Text } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { useTheme } from '../context/UseTheme'
import Styles from '../Styles';

export default function Settings () {
  const { isDarkMode } = useTheme()
    return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton />
    </View>
  );
}
