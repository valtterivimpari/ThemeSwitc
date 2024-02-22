import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles'; // Remove the extra closing curly brace

export default function Home() {
    const {isDarkMode} = useTheme()
    return (
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    );
}