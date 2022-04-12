import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import { MenuSideBar } from "./src/Navigator/MenuSideBar";


export default function App() {
  const [loaded] = useFonts({
    GrapeNuts: require('./assets/fonts/GrapeNuts-Regular.ttf'),
  });

  if(!loaded) return <AppLoading />

  return (
    
      <NavigationContainer>
        <MenuSideBar />
      </NavigationContainer>
    
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
