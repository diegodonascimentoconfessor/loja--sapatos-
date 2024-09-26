import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0D0D0D', // Define a cor da barra
        },
        tabBarActiveTintColor: '#1F35B7', // Cor dos ícones ativos
        tabBarInactiveTintColor: '#888888', // Cor dos ícones inativos
      }}
    >
      <Tabs.Screen 
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen 
        name="categories"
        options={{
          title: 'Categorias',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="archive" color={color} />
        }}
      />
      <Tabs.Screen 
        name="Menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
        }}
      />
      <Tabs.Screen 
        name="about"
        options={{
          title: 'Sobre o Aplicativo',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />
        }}
      />
    </Tabs>
  );
}
