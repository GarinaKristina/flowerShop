import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../components/common/FormInput';
import { FieldError } from '../components/common/FieldError';
import { KeyRound, Mail, User, UserPlus, ArrowRight } from 'lucide-react-native';
import { buttonNames } from '../constants/buttonNames';
import { DatePickerInput } from '../components/common/DataPicker';

import { pages } from '../constants/navigation';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { mainLabels, placeholders, signUpLabels, validationMessages } from '../constants/mainInfo';

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegexp = /^[A-Za-z' -]+$/;

const nameMessage = validationMessages.namePattern;
const emailValidation = yup.string().matches(emailRegexp, validationMessages.invalidEmail);
const [defaultName, defaultLastName, defaultBirthday, defaultEmail, defaultPassword] = [
  'Cat',
  'Sonia',
  new Date(1985, 2, 14),
  'abc@abc.abc',
  '12345678',
];

const schema = yup.object({
  firstName: yup.string().label(mainLabels.firstName).required().min(2).matches(nameRegexp, nameMessage),
  lastName: yup.string().label(mainLabels.lastName).required().min(2).matches(nameRegexp, nameMessage),
  birthDate: yup.date().label(mainLabels.dateOfBirth).required(),
  email: emailValidation.label(placeholders.email).required(),
  password: yup.string().label(mainLabels.password).required().min(8, validationMessages.shortPassword),
  confirmPassword: yup
    .string()
    .label(mainLabels.confirmPassword)
    .required()
    .oneOf([yup.ref('password')], validationMessages.passwordsDoNotMatch),
});

type SignUpFormValues = yup.InferType<typeof schema>;

export function SignUp() {
  const navigation = useAppNavigation();

  const { control, handleSubmit, formState } = useForm<SignUpFormValues>({
    defaultValues: {
      firstName: defaultName,
      lastName: defaultLastName,
      birthDate: defaultBirthday,
      email: defaultEmail,
      password: defaultPassword,
      confirmPassword: defaultPassword,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = () => navigation.navigate(pages.RoleSelection);
  // const save = (values:FormValue)=> {
  //   fetch(......)
  // }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{signUpLabels.title}</Text>
          <Text style={styles.subTitle}>{signUpLabels.subTitle}</Text>
        </View>
        <View style={styles.userDataContainer}>
          <FormInput
            control={control}
            name="firstName"
            label={mainLabels.firstName}
            placeholderValue={placeholders.firstName}
            icon={<User size={16} />}
            width={styles.dataInput.width}
          />
          <FormInput
            control={control}
            name="lastName"
            label={mainLabels.lastName}
            placeholderValue={placeholders.lastName}
            icon={<User size={16} />}
            width={styles.dataInput.width}
          />
        </View>
        <Controller
          control={control}
          name="birthDate"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <View>
              <DatePickerInput value={value} onChange={onChange} label={mainLabels.dateOfBirth} minimumAge={18} />
              <FieldError message={error?.message} />
            </View>
          )}
        />
        <FormInput
          control={control}
          name="email"
          label={mainLabels.emailAddress}
          placeholderValue={placeholders.email}
          icon={<Mail size={16} />}
          width={styles.inputWide.width}
        />
        <FormInput
          control={control}
          name="password"
          label={mainLabels.password}
          placeholderValue={placeholders.password}
          icon={<KeyRound size={16} />}
          width={styles.inputWide.width}
        />
        <FormInput
          control={control}
          name="confirmPassword"
          label={mainLabels.confirmPassword}
          placeholderValue={placeholders.confirmPassword}
          icon={<KeyRound size={16} />}
          width={styles.inputWide.width}
        />
        <View>
          {/* onPress={handleSubmit(save)} */}
          <TouchableOpacity style={styles.signUpButton} disabled={!formState.isValid} onPress={handleSubmit(onSubmit)} activeOpacity={0.7}>
            <Text style={styles.signUpButtonText}>{buttonNames.signUp}</Text>
            <View style={styles.buttonIcon}>
              <UserPlus size={18} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomTextSignIn}>
        <TouchableOpacity style={styles.bottomTouchable} onPress={() => navigation.navigate(pages.SignIn)} activeOpacity={0.7}>
          <Text style={styles.signUpText}>{mainLabels.alreadyHaveAccount}</Text>
          <View style={styles.signUpInline}>
            <Text style={styles.signUpTextBold}>{mainLabels.signInToBloomMarket}</Text>
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
  inputLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: '#565D6D',
    marginTop: 4,
    fontWeight: '700',
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
