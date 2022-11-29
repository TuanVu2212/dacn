import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
// import configureStore from "./redux/store";
// import OrderCompleted from "./screens/OrderCompleted";
import BottomTabs from './components/home/BottomTabs'

// const store = configureStore();
import {
  Home,
  RestaurantDetail,
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp
} from './screens'

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    // <ReduxProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
        />
        <Stack.Screen
          name="OTP"
          component={Otp}
        />
        {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // </ReduxProvider>
  );
}
