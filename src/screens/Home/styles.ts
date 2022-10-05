import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#131016',
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FDFCFE',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FDFCFE',
    marginTop: 42,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    color: '#6B6B6B',
    marginTop: 4
  },
  form: {
    marginTop: 34,
    flexDirection: 'row',
  },
  emptyListText: {
    color: '#FDFCFE',
    fontSize: 14,
    textAlign: 'center'
  },
  footer: {
    marginTop: 16,
    height: 56,
    marginBottom: 16
  }
})