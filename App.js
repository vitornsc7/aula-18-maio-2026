import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "./Theme/ThemeProvider";
import { DateProvider } from "./context/DateContext";
import DatePickerScreen from "./screens/DatePickerScreen";
import SelectedDateScreen from "./screens/SelectedDateScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <DateProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#4A90E2",
              tabBarInactiveTintColor: "#999",
              headerStyle: { backgroundColor: "#4A90E2" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          >
            <Tab.Screen
              name="DatePicker"
              component={DatePickerScreen}
              options={{
                title: "Selecionar",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome6 name="calendar-days" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="SelectedDate"
              component={SelectedDateScreen}
              options={{
                title: "Data Escolhida",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome6 name="calendar-check" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </DateProvider>
    </ThemeProvider>
  );
}

