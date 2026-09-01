import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import InputComponent from '../components/Input';
import { KeyRound, Mail, User, UserPlus, MessageCircleWarning, ArrowRight } from 'lucide-react-native';
import { buttonNames } from '../constants/buttonNames';
import { DatePickerInput } from '../components/DataPicker';

import { pages } from '../constants/navigation';
import { useAppNavigation } from '../hooks/useAppNavigation';

export function SignUp() {
  const navigation = useAppNavigation();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState<string | null>(null);

  const validateEmail = (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(value === '' ? null : re.test(value) ? null : 'Please enter a valid email address.');
  };

  const validatePassword = (value: string) => {
    setPasswordError(value === '' ? null : value.length >= 8 ? null : 'Password must be at least 8 characters.');

    if (confirmPassword !== '') {
      setConfirmPasswordError(value === confirmPassword ? null : 'Passwords do not match.');
    }
  };

  const onEmailChange = (v: string) => {
    setEmail(v);
    validateEmail(v);
  };

  const onPasswordChange = (v: string) => {
    setPassword(v);
    validatePassword(v);
  };

  const validateConfirmPassword = (value: string) => {
    setConfirmPasswordError(value === '' ? null : value === password ? null : 'Passwords do not match.');
  };

  const onConfirmPasswordChange = (v: string) => {
    setConfirmPassword(v);
    validateConfirmPassword(v);
  };

  const isFormValid =
    email.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError;
  const [birthDate, setBirthDate] = React.useState(new Date());

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Tell us about you</Text>
          <Text style={styles.subTitle}>Join our community of flower enthusiasts today.</Text>
        </View>
        <View style={styles.userDataContainer}>
          <View>
            <Text style={styles.inputDescription}>First Name</Text>
            <InputComponent
              placeholderValue={'Jane'}
              icon={<User size={16} />}
              value={firstName}
              onChangeText={setFirstName}
              style={{ width: styles.dataInput.width }}
              inputStyle={{ width: styles.dataInput.width }}
            />
          </View>
          <View>
            <Text style={styles.inputDescription}>Last Name</Text>
            <InputComponent
              placeholderValue={'Doe'}
              icon={<User size={16} />}
              value={lastName}
              onChangeText={setLastName}
              style={{ width: styles.dataInput.width }}
              inputStyle={{ width: styles.dataInput.width }}
            />
          </View>
        </View>
        <DatePickerInput value={birthDate} onChange={setBirthDate} label="Date of Birth" minimumAge={18} />
        <View>
          <Text style={styles.inputDescription}>Email Address</Text>
          <InputComponent
            placeholderValue={'Email'}
            icon={<Mail size={16} />}
            value={email}
            onChangeText={onEmailChange}
            style={styles.inputWide}
            inputStyle={styles.inputWide}
          />
          {emailError && (
            <View style={styles.errorRow}>
              <MessageCircleWarning size={16} color="#EF4444" />
              <Text style={styles.errorText}>{emailError}</Text>
            </View>
          )}
        </View>

        <View>
          <Text style={styles.inputDescription}>Password</Text>
          <InputComponent
            placeholderValue={'Password'}
            icon={<KeyRound size={16} />}
            value={password}
            onChangeText={onPasswordChange}
            style={styles.inputWide}
            inputStyle={styles.inputWide}
          />
          {passwordError && (
            <View style={styles.errorRow}>
              <MessageCircleWarning size={16} color="#EF4444" />
              <Text style={styles.errorText}>{passwordError}</Text>
            </View>
          )}
        </View>
        <View>
          <Text style={styles.inputDescription}>Confirm Password</Text>
          <InputComponent
            placeholderValue={'Confirm Password'}
            icon={<KeyRound size={16} />}
            value={confirmPassword}
            onChangeText={onConfirmPasswordChange}
            style={styles.inputWide}
            inputStyle={styles.inputWide}
          />
          {confirmPasswordError && (
            <View style={styles.errorRow}>
              <MessageCircleWarning size={16} color="#EF4444" />
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            </View>
          )}
        </View>
        <View>
          <TouchableOpacity
            style={styles.signUpButton}
            disabled={!isFormValid}
            onPress={() => navigation.navigate(pages.RoleSelection)}
            activeOpacity={0.7}
          >
            <Text style={styles.signUpButtonText}>{buttonNames.signUp}</Text>
            <View style={styles.buttonIcon}>
              <UserPlus size={18} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomTextSignIn}>
        <TouchableOpacity style={styles.bottomTouchable} onPress={() => navigation.navigate(pages.SignIn)} activeOpacity={0.7}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <View style={styles.signUpInline}>
            <Text style={styles.signUpTextBold}>Sign In to BloomMarket</Text>
            <ArrowRight />
          </View>
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
    paddingBottom: 0,
  },
  signUpButton: {
    marginTop: 24,
    height: 46,
    width: 200,
    flexDirection: 'row',
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
  signUpButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: 'rgb(15, 22, 39)',
  },
  buttonIcon: {
    width: 20,
    height: 16,
    position: 'absolute',
    right: 120,
    tintColor: '#565D6DFF',
    marginRight: 20,
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
    color: 'rgb(12, 39, 101)',
    fontFamily: 'Inter',
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  subTitle: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 28,
    color: '#171A1FFF',
  },
  titleContainer: {
    paddingLeft: 16,
    alignSelf: 'flex-start',
  },
  dataInput: {
    width: 180,
  },
  userDataContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  inputDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#565D6D',
    marginTop: 4,
    fontWeight: '700',
  },
  inputLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: '#565D6D',
    marginTop: 4,
    fontWeight: '700',
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 4,
  },
  errorText: {
    color: '#EF4444',
    marginLeft: 8,
    fontSize: 13,
  },
  inputWide: {
    width: 360,
  },
  bottomTextSignIn: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  bottomTouchable: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  signUpInline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
    color: '#565D6DFF',
  },
});
