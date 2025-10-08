import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { flex: 1 },
  screenWithBg: { flex: 1, backgroundColor: '#f5f5f5' },
  centerContent: { flex: 1, justifyContent: 'center' },
  padding16: { padding: 16 },
  listContent: { paddingBottom: 16 },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  itemDetails: { marginLeft: 12, flex: 1 },
  itemTitle: { fontSize: 16, fontWeight: '600' },
  itemBody: { color: '#555', marginTop: 4 },
  errorText: { color: 'red' },
  noResultsContainer: { padding: 16 },
  noResultsText: { textAlign: 'center', color: '#555' },
  retryButton: {
    marginTop: 16,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;