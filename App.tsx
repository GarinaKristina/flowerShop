import { StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { UserRole } from './src/components/UserRole';
import { buyerRoleDescription, sellerRoleDescription } from './src/constants/UserRoleDescription';
import { ArrowRight } from 'lucide-react-native';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <SafeAreaView edges={['top']} style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Join BloomMarket</Text>
        </SafeAreaView>
        <Text style={styles.mainTitle}>How would you like to use BloomMarket?</Text>
        <Text style={styles.description}>Choose the role that best describes how you want to interact with our platform.</Text>
        <View style={styles.stack}>
          <View style={styles.item}>
            <UserRole
              userRole="Buyer"
              roleDescription={buyerRoleDescription.description}
              highlights={buyerRoleDescription.highlights}
            />
          </View>
          <UserRole
            userRole="Seller"
            roleDescription={sellerRoleDescription.description}
            highlights={sellerRoleDescription.highlights}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
            <View style={styles.buttonIcon}> <ArrowRight size={18}/></View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stack: {
    alignSelf: 'stretch',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 260,
  },
  item: {
    marginBottom: 16,
  },
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
  },
  mainTitle: {
  position: 'absolute', 
  top: 132, 
  left: 16, 
  width: 264, 
  fontFamily: 'Archivo', 
  fontSize: 24, 
  lineHeight: 32, 
  fontWeight: '800', 
  color: '#171A1FFF',
},
description: {
  position: 'absolute', 
  top: 204, 
  left: 16, 
  width: 356, 
  fontFamily: 'Inter',
  fontSize: 14, 
  lineHeight: 20, 
  fontWeight: '400', 
  color: '#565D6DFF', 
},
continueButton: {
  position: 'absolute', 
  left: 16,
  right: 16,
  bottom: -35,
  height: 46, 
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#F3F4F6FF', 
  opacity: 1, 
  borderRadius: 16, 
  borderWidth: 0, 
  borderColor: '#000000FF', 
  shadowColor: '#171A1F',
  shadowOffset: { width: 0, height: 2 }, 
  shadowOpacity: 0.12,
  shadowRadius: 2, 
  elevation: 2,
},
continueButtonText: {
  fontFamily: 'Inter',
  fontSize: 16,
  lineHeight: 26,
  fontWeight: '700',
  color: '#565D6DFF',
},
buttonIcon: {
  width: 20, 
  height: 16, 
  position: 'absolute',
  right: 120,
  tintColor: '#565D6DFF',
},
buttonHover :{
  color: '#565D6DFF', 
  backgroundColor: '#F3F4F6FF',
},
buttonHoverActive :{
  color: '#565D6DFF', 
  backgroundColor: '#F3F4F6FF', 
},
buttonDisabled: {
  opacity: 0.4, 
}

});

export default App;
