import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-secondary-200">
      <Text className="text-3xl font-pblack">Aora App</Text>
      <Link className="text-white" href="/home">Go to Home</Link>
    </View>
  );
}
