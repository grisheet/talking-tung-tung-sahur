import React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Toaster } from 'sonner-native';

import RootNavigator from './navigation/RootNavigator';
import { ThemeProvider, useTheme, useThemeMode } from './contexts/ThemeContext';

/**
 * App.tsx
 * Entry point for the application.
 * Do not add navigation stack here. Add it in the navigation folder.
 */
function AppContent() {
  const { background, cardBackground, text, border, primary, statusBarStyle } = useTheme();
  const { themeMode } = useThemeMode();

  // Always extend the base theme from react.navigation.
  // Otherwise, error such as cannot read property 'n.medium' of undefined will occur which basically means
  // the fonts property is missing from the theme.
  const navigationTheme = {
    ...(themeMode === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...(themeMode === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
      background: background,
      card: cardBackground,
      text: text,
      border: border,
      primary: primary,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={statusBarStyle} />
      <RootNavigator />
      <Toaster />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
