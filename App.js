import { View, Text, StyleSheet, Button} from "react-native";
import Testing from './Testing.js';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Testing" component = {Testing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({navigation}) => {
  return (
    <Button
      title="Go to Testing"
      onPress={() =>
        navigation.navigate('Testing')
      }
    />
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 100,
  }
})
