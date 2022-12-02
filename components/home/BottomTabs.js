import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS, SIZES } from "../../constants";

export default function BottomTabs({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 60,
        alignItems: 'center',
        borderRadius: SIZES.radius * 2,
        backgroundColor: COLORS.lightOrange2,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" onPress={() => navigation.replace("MainLayout")} />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" onPress={() => navigation.replace("SignIn")} />
      <Icon icon="user" text="Account" onPress={() => navigation.replace("User")} />
    </View>
  );
}

const Icon = ({ icon, text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View>
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
