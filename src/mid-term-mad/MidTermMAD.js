import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

export default function MidTermMAD() {
  return (
    // <View style={styles.body}>

    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, justifyContent: "center", alignItems: "center" },
});
