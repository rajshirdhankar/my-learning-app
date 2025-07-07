import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const PersonDetails = () => {
  const { personName } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{ title: personName, headerTitleAlign: "center" }}
      />
      <Text style={{ fontSize: 30 }}>Person Details: {personName}</Text>
    </View>
  );
};

export default PersonDetails;