import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          // headerShown: false,
          headerTitle: "",
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="person/[personName]"
          options={{
            drawerLabel: "Person",
          }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}