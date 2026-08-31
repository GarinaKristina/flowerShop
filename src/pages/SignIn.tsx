import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import InputComponent from '../components/Input';
import { KeyRound, Mail } from 'lucide-react-native';
import { buttonNames } from '../constants/ButtonNames';
import { pages, RootStackParamList } from '../constants/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function SignIn() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}> Sign in to your account</Text>
        </View>
        <View>
          <Text>Email Address</Text>
          <InputComponent placeholderValue={'Email'} icon={<Mail size={16} />} value={email} onChangeText={setEmail} />
        </View>
        <View>
          <Text>Password</Text>
          <InputComponent placeholderValue={'Password'} icon={<KeyRound size={16} />} value={password} onChangeText={setPassword} />
        </View>
        <View>
          <TouchableOpacity style={styles.signInButton} disabled={!isFormValid}>
            <Text style={styles.signInButtonText}>{buttonNames.signIn}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(pages.SignUp)}>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUpTextBold}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'column',
    marginTop: 40,
    alignItems: 'center',
    gap: 16,
    paddingBottom: 40,
  },
  signInButton: {
    marginTop: 24,
    height: 46,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(78, 122, 211)',
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
  signInButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: 'rgb(15, 22, 39)',
  },
  buttonHover: {
    color: '#565D6DFF',
    backgroundColor: 'rgb(160, 183, 229)',
  },
  buttonHoverActive: {
    color: '#565D6DFF',
    backgroundColor: '#F3F4F6FF',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  signUpText: {
    color: '#565D6DFF',
    textAlign: 'center',
  },
  signUpTextBold: {
    fontWeight: '700',
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
});
