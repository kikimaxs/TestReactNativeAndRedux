import React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReduces';
import { selectionActions } from '../../../store/rootReduces';
import { useGetProductDetailQuery } from '../../../store/api';
import Header from '../../../components/headers/Header';
import styles from './styles';
import BackButton from '../../../components/headers/BackButton';

export default function PostDetailsScreen() {
  const dispatch = useDispatch();
  const selectedPostId = useSelector(
    (state: RootState) => state.selection.selectedPostId
  );
  const { data: detail, isFetching, error } = useGetProductDetailQuery(selectedPostId as number, {
    skip: !selectedPostId,
  });

  return (
    <View style={styles.screen}>
      <Header
        left={<BackButton onPress={() => dispatch(selectionActions.unselect())} />}
        center={''}
        right={<View style={styles.headerRightSpacer} />}
      />

      {isFetching ? (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Memuat Data...</Text>
        </View>
      ) : error ? (
        <View style={styles.padding16}>
          <Text style={{ color: 'red' }}>Error memuat detail.</Text>
          <Button title="Kembali" onPress={() => dispatch(selectionActions.unselect())} />
        </View>
      ) : !detail ? (
        <View style={styles.padding16}>
          <Text>Data tidak ditemukan.</Text>
          <Button title="Kembali" onPress={() => dispatch(selectionActions.unselect())} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.detailTitle}>{detail.title}</Text>
          <Text style={styles.detailBody}>{detail.body}</Text>
        </ScrollView>
      )}
    </View>
  );
}