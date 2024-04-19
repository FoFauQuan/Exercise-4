import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        header:(props)=> <CustonNavigationBar {...props}/>,
        headerStyle: {
            backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;