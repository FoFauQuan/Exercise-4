import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";
import React from "react";
import CustonNavigationBar from "../src/CustomNavigationBar";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
return (
    <Stack.Navigator
    screenOptions={{
    header:(props)=> <CustonNavigationBar {...props}/>,
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
    );
};

export { MainStackNavigator};