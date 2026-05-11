import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Header } from '../src/components/Header';
import { HomeScreen } from '../src/screens/HomeScreen';
import { ProfileModal } from '../src/screens/ProfileModal';
import { Colors } from '../src/theme/colors';

export default function App() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header onProfilePress={() => setProfileOpen(true)} />
          <HomeScreen onProfilePress={() => setProfileOpen(true)} />
          <ProfileModal
            visible={profileOpen}
            onClose={() => setProfileOpen(false)}
          />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bgDefault,
  },
});
