import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../theme/colors';
import { currentUser } from '../data/mockData';

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
  color?: string;
}

function InfoRow({ icon, label, value, color }: InfoRowProps) {
  return (
    <View style={infoStyles.row}>
      <View style={[infoStyles.iconBox, { backgroundColor: (color || Colors.blueDefault) + '15' }]}>
        <Text style={infoStyles.rowIcon}>{icon}</Text>
      </View>
      <View style={infoStyles.rowText}>
        <Text style={infoStyles.rowLabel}>{label}</Text>
        <Text style={infoStyles.rowValue}>{value}</Text>
      </View>
    </View>
  );
}

const infoStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayUltralight,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowIcon: {
    fontSize: 18,
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  rowValue: {
    fontSize: 14,
    color: Colors.textDefault,
    fontWeight: '500',
  },
});

export function ProfileModal({ visible, onClose }: ProfileModalProps) {
  const insets = useSafeAreaInsets();
  const slideAnim = useRef(new Animated.Value(400)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 80,
          friction: 12,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 400,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.sheet,
          { paddingBottom: insets.bottom + 16 },
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.handle} />

        <View style={styles.avatarSection}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>{currentUser.avatar}</Text>
          </View>
          <View style={styles.onlineRow}>
            <View style={styles.onlinePill}>
              <View style={styles.greenDot} />
              <Text style={styles.onlineText}>Ativo</Text>
            </View>
          </View>
          <Text style={styles.name}>{currentUser.name}</Text>
          <Text style={styles.cargo}>{currentUser.cargo}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.infoSection}>
          <InfoRow
            icon="✉️"
            label="E-mail institucional"
            value={currentUser.email}
            color={Colors.blueDefault}
          />
          <InfoRow
            icon="🏛️"
            label="Órgão"
            value={currentUser.orgao}
            color={Colors.blueDefault}
          />
          <InfoRow
            icon="🏷️"
            label="Sigla"
            value={currentUser.orgaoAbrev}
            color={Colors.blueDefault}
          />
          <InfoRow
            icon="📂"
            label="Setor / Diretoria"
            value={currentUser.setor}
            color={Colors.blueDefault}
          />
          <InfoRow
            icon="💼"
            label="Cargo"
            value={currentUser.cargo}
            color={Colors.blueDefault}
          />
        </ScrollView>

        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 20,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 20,
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.grayLight,
    marginBottom: 20,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
    gap: 4,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.blueDefault,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: Colors.blueDefault,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  avatarLargeText: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.white,
  },
  onlineRow: {
    marginBottom: 4,
  },
  onlinePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#EAFBD7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#136B10',
  },
  onlineText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#136B10',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDefault,
    marginTop: 4,
  },
  cargo: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  infoSection: {
    marginBottom: 20,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E45F5F',
    backgroundColor: '#FFF0F0',
  },
  logoutIcon: {
    fontSize: 16,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.danger,
  },
});
