import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TimeCalculator from './src/screens/TimeCalculator';

export default function App() {
  return (
    <NativeBaseProvider>
      <TimeCalculator />
    </NativeBaseProvider>
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
