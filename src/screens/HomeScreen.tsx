import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Colors } from '../theme/colors';
import { dashboards, categories, Dashboard } from '../data/mockData';
import { DashCard } from '../components/DashCard';

interface HomeScreenProps {
  onProfilePress: () => void;
}

export function HomeScreen({ onProfilePress }: HomeScreenProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  const filtered = useMemo(() => {
    return dashboards.filter((d) => {
      const matchSearch =
        search.length === 0 ||
        d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.description.toLowerCase().includes(search.toLowerCase()) ||
        d.orgaoAbrev.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        activeCategory === 'todos' ||
        (activeCategory === 'favoritos' && d.isFavorite) ||
        d.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  function handleDashPress(item: Dashboard) {
    Alert.alert(
      item.title,
      `${item.description}\n\nÓrgão: ${item.orgao}\nÚltima atualização: ${item.lastUpdated}`,
      [
        { text: 'Fechar', style: 'cancel' },
        { text: 'Abrir painel', onPress: () => {} },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar painéis..."
            placeholderTextColor={Colors.textDisabled}
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.catScroll}
        contentContainerStyle={styles.catContent}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={[
              styles.catChip,
              activeCategory === cat.key && styles.catChipActive,
            ]}
            onPress={() => setActiveCategory(cat.key)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.catLabel,
                activeCategory === cat.key && styles.catLabelActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>
          {filtered.length} {filtered.length === 1 ? 'painel' : 'painéis'}
        </Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DashCard item={item} onPress={handleDashPress} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={styles.emptyText}>Nenhum painel encontrado</Text>
            <Text style={styles.emptySubText}>Tente ajustar o filtro ou a busca</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDefault,
  },
  searchRow: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 4,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.grayUltralight,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    gap: 8,
  },
  searchIcon: {
    fontSize: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textDefault,
    padding: 0,
  },
  clearIcon: {
    fontSize: 12,
    color: Colors.textDisabled,
    padding: 4,
  },
  catScroll: {
    marginTop: 12,
  },
  catContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  catChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.grayUltralight,
  },
  catChipActive: {
    backgroundColor: Colors.blueDefault,
    borderColor: Colors.blueDefault,
  },
  catLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  catLabelActive: {
    color: Colors.white,
    fontWeight: '600',
  },
  listHeader: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  listTitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  empty: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDefault,
  },
  emptySubText: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
});
