import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const details = () => {
  const router = useRouter();

  return (
    <View>
      <Text style={styles.textHeader}>Details Page</Text>
      <Button
        title="Go to Home"
        color={"blue"}
        onPress={() => router.navigate("/")}
      />

      {/* Using useRouter and button */}
      <Button
        title="Go to Kirat"
        color={"blue"}
        onPress={() =>
          router.push({
            pathname: "/person/[personName]",
            params: { personName: "Kirat" },
          })
        }
      />

      {/* Using Link */}
      <Link
        href={{
          pathname: "/person/[personName]",
          params: { personName: "Kirat" },
        }}
        style={styles.button}
      >
        Go to Kirat
      </Link>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    textAlign: "center",
    padding: 20,
    color: "red",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});