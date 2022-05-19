import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigator/Navigator';
import { Provider } from 'react-redux';
import RootReducer from './src/store';
import { init } from './src/db';

init()
    .then(() => console.log('Database initialized'))
    .catch((err) => {
      console.log('Database fail connect');
      console.log(err.message);
    })

export default function App() {
  const [loaded] = useFonts({
    GrapeNuts: require('./assets/fonts/GrapeNuts-Regular.ttf'),
  });

  if (!loaded) return <AppLoading />

  return (
    <Provider store={RootReducer}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
