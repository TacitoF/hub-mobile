import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors } from '../theme/colors';
import { Dashboard } from '../data/mockData';

interface DashCardProps {
  item: Dashboard;
  onPress: (item: Dashboard) => void;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

function formatViews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function DashCard({ item, onPress }: DashCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(item)}
      activeOpacity={0.85}
    >
      <View style={[styles.colorStripe, { backgroundColor: item.color }]} />

      <View style={styles.body}>
        <View style={styles.topRow}>
          <View style={[styles.iconBadge, { backgroundColor: item.color + '18' }]}>
            <Text style={styles.icon}>{item.icon}</Text>
          </View>
          {item.isFavorite && (
            <View style={styles.favBadge}>
              <Text style={styles.favIcon}>★</Text>
            </View>
          )}
        </View>

        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>

        <View style={styles.footer}>
          <View style={[styles.orgTag, { borderColor: item.color + '40' }]}>
            <Text style={[styles.orgText, { color: item.color }]}>{item.orgaoAbrev}</Text>
          </View>
          <View style={styles.meta}>
            <Text style={styles.metaText}>👁 {formatViews(item.views)}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{formatDate(item.lastUpdated)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
  },
  colorStripe: {
    width: 4,
  },
  body: {
    flex: 1,
    padding: 14,
    gap: 6,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
  },
  favBadge: {
    backgroundColor: '#FFF6CE',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  favIcon: {
    fontSize: 12,
    color: '#B77706',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textDefault,
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 17,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  orgTag: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  orgText: {
    fontSize: 11,
    fontWeight: '600',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: Colors.textDisabled,
  },
  metaDot: {
    fontSize: 11,
    color: Colors.textDisabled,
  },
});
