import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { flex: 1 },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#fff' },
  headerRightSpacer: { width: 1 },
  loadingOverlay: {
    padding: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: { color: '#fff' },
  padding16: { padding: 16 },
  scrollContent: { padding: 16 },
  detailTitle: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  detailBody: { color: '#555', marginTop: 16 },
});

export default styles;