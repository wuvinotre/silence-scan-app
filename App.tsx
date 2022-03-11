import { StatusBar } from 'expo-status-bar';
import Navigation from './src/route';
import {} from 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
