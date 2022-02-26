import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Infinito from "./src/Infinito";
import Container from "./src/Container";

let logo = require('./assets/svg/logo.svg')

export default function App() {
  return (
    <Container>
      <Infinito />
    </Container>
  );
}
