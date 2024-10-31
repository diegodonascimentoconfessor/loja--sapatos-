import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000A3C', /// Define a cor da barra
        },
        tabBarActiveTintColor: '#000A3C', // Cor dos ícones e títulos ativos (branca)
        tabBarActiveBackgroundColor:'#ffffff',
        tabBarInactiveTintColor: '#ffffff', // Cor dos ícones e títulos inativos
      }}
    >
      <Tabs.Screen 
        name="home"
        options={{
          title: 'Início',
          headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
        }}
      />
      <Tabs.Screen 
        name="about"
        options={{
          title: 'Sobre o Aplicativo',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />
        }}
      />

      
    </Tabs>
  );
}
