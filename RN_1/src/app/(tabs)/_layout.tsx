import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Index", tabBarIcon: ({ focused }) => <Ionicons name="home-outline" size={24} color={focused ? "blue" : "black"} /> }} />
            <Tabs.Screen name="about" options={{ title: "About", tabBarIcon: ({ focused }) => <Ionicons name="information-circle-outline" size={24} color={focused ? "blue" : "black"} /> }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ focused }) => <Ionicons name="person-outline" size={24} color={focused ? "blue" : "black"} /> }} />
        </Tabs>
    );
}
