import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const details = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={styles.textHeader}>Details Screen</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Go to settings"
          onPress={() => router.push("/settings")}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Go to aaryan"
          onPress={() =>
            router.push({
              pathname: "/person/[personName]",
              params: { personName: "Aaryan" },
            })
          }
        />
      </View>
    </View>
  );
};
export default details;
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
    paddingTop: 50,
  },
});