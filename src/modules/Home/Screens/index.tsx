import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectionActions } from '../../../store/rootReduces';
import { useGetProductsQuery } from '../../../store/api';
import Header from '../../../components/headers/Header';
import SearchBar from '../../../components/search/SearchBar';
import styles from './styles';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetProductsQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);

  const items = (data || []).filter((item: any) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (item.title || '').toLowerCase().includes(q) || (item.body || '').toLowerCase().includes(q);
  });

  React.useEffect(() => {
    if (!searchQuery) {
      setShowNoResults(false);
      return;
    }
    if (items.length > 0) {
      setShowNoResults(false);
      return;
    }
    const t = setTimeout(() => setShowNoResults(true), 2000);
    return () => clearTimeout(t);
  }, [searchQuery, items.length]);

  React.useEffect(() => {
    if (error) {
      Alert.alert('Maintenance', 'Sistem sedang dalam perawatan. Silakan coba lagi nanti.');
    }
  }, [error]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => dispatch(selectionActions.select(item.id))} style={styles.card}>
      <View style={styles.row}>
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemBody} numberOfLines={2}>
            {item.body}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <Header center={<SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search..." />} />
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <Header center={<SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search..." />} />
        <View style={styles.centerContent}>
          <Text style={styles.errorText}>Sistem sedang maintenance.</Text>
          <TouchableOpacity onPress={() => refetch()} style={styles.retryButton}>
            <Text style={styles.retryButtonText}>Coba lagi</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screenWithBg}>
      <Header center={<SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search..." />} />
      {showNoResults ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>Tidak ditemukan</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}
