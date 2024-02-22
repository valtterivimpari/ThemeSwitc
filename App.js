import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './context/ThemeProvider';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home';
import Settings from './screens/Settings';

// Define Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundColor='#666' barStyle='light-content'/>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: ({ navigation }) => (
                <MainAppbar
                  navigation={navigation}
                  backgroundColor="#666"
                  icon="cog"
                  color="#fff"
                />
              )
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
