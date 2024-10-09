import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name= "product/[id]"options={{headerShown:true}}/>
            <Stack.Screen name="menu"/>
            <Stack.Screen name= "cadastro"/>
            <Stack.Screen name="ProductList"/>
         
        </Stack>
    );
}