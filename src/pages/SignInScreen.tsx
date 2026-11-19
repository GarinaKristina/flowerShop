import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import InputComponent from '../components/common/Input';
import { Typography } from '../components/common/Typography';
import { KeyRound, Mail } from 'lucide-react-native';
import { buttonNames } from '../constants/buttonNames';
import { pages } from '../constants/navigation';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { mainLabels, placeholders } from '../constants/mainInfo';

export function SignIn() {
  const navigation = useAppNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View>
          <Typography variant="h5">{mainLabels.signInToAccount}</Typography>
        </View>
        <View>
          <Text>{mainLabels.emailAddress}</Text>
          <InputComponent placeholderValue={placeholders.email} icon={<Mail size={16} />} value={email} onChangeText={setEmail} />
        </View>
        <View>
          <Text>{mainLabels.password}</Text>
          <InputComponent
            placeholderValue={placeholders.password}
            icon={<KeyRound size={16} />}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.signInButton} disabled={!isFormValid}>
            <Typography variant="button">{buttonNames.signIn}</Typography>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(pages.SignUp)}>
          <Text style={styles.signUpText}>
            {mainLabels.doNotYouHaveAccount}
            <Text style={styles.signUpTextBold}>{mainLabels.signUp}</Text>
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
});
