import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: { minWidth: 0, paddingRight: 8, justifyContent: 'center' },
  center: { flex: 1, justifyContent: 'center' },
  right: { minWidth: 0, paddingLeft: 8, justifyContent: 'center' },
  backButton: { paddingVertical: 4, paddingRight: 8 },
  backIcon: { color: '#ffffff', fontSize: 24, fontWeight: 'bold' },
});

export default styles;