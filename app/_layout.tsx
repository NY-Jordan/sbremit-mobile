import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "./../global.css"
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold, } from '@expo-google-fonts/inter';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="Home"  options={{ headerShown: false }} />
        <Stack.Screen name="Transaction"  options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider> 
  );
}
