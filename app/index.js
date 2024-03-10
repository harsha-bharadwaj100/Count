import { React, useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter, Navigator } from "expo-router";
import { COLORS, SIZES, icons, images } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{ headerStyle: { backgroundColor: COLORS.lightWhite } }}
      ></Stack.Screen>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Hello World!</Text>
//     </View>
//   );
// }
