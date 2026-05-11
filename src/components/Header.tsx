import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../theme/colors';
import { currentUser } from '../data/mockData';

interface HeaderProps {
  onProfilePress: () => void;
}

export function Header({ onProfilePress }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blueDark} />

      <View style={styles.row}>
        <View style={styles.brand}>
          <View style={styles.logoMark}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotSmall]} />
          </View>
          <View>
            <Text style={styles.brandName}>Hubbi</Text>
            <Text style={styles.brandSub}>Liga Digital · PE</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.avatarButton}
          onPress={onProfilePress}
          activeOpacity={0.8}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{currentUser.avatar}</Text>
          </View>
          <View style={styles.onlineDot} />
        </TouchableOpacity>
      </View>

      <View style={styles.greetRow}>
        <Text style={styles.greet}>
          Olá, <Text style={styles.greetName}>{currentUser.name.split(' ')[0]}</Text>
        </Text>
        <Text style={styles.greetSub}>Seus painéis de hoje</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueDark,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoMark: {
    width: 32,
    height: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    padding: 2,
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 4,
    backgroundColor: Colors.blueLight,
  },
  dotSmall: {
    backgroundColor: Colors.blueUltralight,
    width: 13,
    height: 13,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  brandSub: {
    fontSize: 11,
    color: Colors.blueUltralight,
    marginTop: 1,
  },
  avatarButton: {
    position: 'relative',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.blueLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.blueUltralight,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.white,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#86D562',
    borderWidth: 2,
    borderColor: Colors.blueDark,
  },
  greetRow: {
    gap: 2,
  },
  greet: {
    fontSize: 22,
    fontWeight: '400',
    color: Colors.blueUltralight,
  },
  greetName: {
    fontWeight: '700',
    color: Colors.white,
  },
  greetSub: {
    fontSize: 13,
    color: Colors.blueUltralight,
    opacity: 0.75,
  },
});
