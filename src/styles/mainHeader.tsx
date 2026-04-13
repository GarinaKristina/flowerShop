import { StyleSheet } from "react-native";

  export const mainHeaderStyles = StyleSheet.create({
    headerContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 108,
    backgroundColor: '#FFFFFFFF',
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#DEE1E6FF',
    zIndex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontFamily: 'Archivo',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: '#171A1FFF',
  }
});