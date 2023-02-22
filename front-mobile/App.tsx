import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./src/ui/components/Header";
import Home from "./src/pages/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
