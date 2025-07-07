import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
        <Drawer.Screen
          name="person/[personName]"
          options={{ title: "Person Name" }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}