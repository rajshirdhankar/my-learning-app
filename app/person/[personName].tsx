import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
const personLayout = () => {
  const { personName } = useLocalSearchParams();
  return (
    <View>
    <Stack.Screen options={{ title: personName }} />
      <Text style={{ fontSize: 30, color: "red", textAlign: "center" }}>
        Person Name is {personName}
      </Text>
    </View>
  );
};
export default personLayout;