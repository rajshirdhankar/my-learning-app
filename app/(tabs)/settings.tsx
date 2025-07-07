import React from "react";
import { Stack } from "expo-router";

import { Text, View } from "react-native";

const settings = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Settings" }} />
      <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
        Settings Screen
      </Text>
    </View>
  );
};

export default settings;