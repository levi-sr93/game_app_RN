import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import LiveScreen from "./src/screens/LiveScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import GameScreen from "./src/screens/GameScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,

  style: {
    backgroundColor: "#343434",
    borderTopColor: "#323232",
  },
};

const TabScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;
            case "LiveScreen":
              iconName = "game-controller";
              break;
            case "ProfileScreen":
              iconName = "user";
              break;

            default:
              iconName = "home";
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#fff" />
            </TabBarIconContainer>
          );
        },
      })}
    >
      <TabNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({ title: "Home" })}
      />
      <TabNav.Screen
        name="LiveScreen"
        component={LiveScreen}
        options={() => ({ title: "Live" })}
      />
      <TabNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({ title: "Profile" })}
      />
    </TabNav.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator mode="modal" headerMode="none">
          <AppStack.Screen name="App" component={TabScreen} />
          <AppStack.Screen name="GameScreen" component={GameScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const TabBarIconContainer = styled.View`
  padding: 5px;
  background-color: ${(props) => (props.focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 32px;
  margin-bottom: ${(props) => (props.focused ? "30px" : "0")};
`;
