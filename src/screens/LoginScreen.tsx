import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoginScreenNavigationProp } from 'dto/navigation';

import InputField from 'components/InputField';

interface IFormValues {
  username: string;
  password: string;
}

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [isLoginError, onSetLoginError] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    if (data.username === 'admin' && data.password === 'password') {
      onSetLoginError(false);
      navigation.navigate('HomeScreen');
    } else {
      onSetLoginError(true);
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/icons/bg.png')}
          resizeMode="contain"
          imageStyle={{ height: Dimensions.get('window').height + 560 }}
          style={styles.bgImage}>
          <View style={styles.coffeeLogoContainer}>
            <Image
              source={require('../assets/icons/coffee-bag.png')}
              resizeMode="contain"
              style={styles.coffeeLogo}
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <InputField
              name="username"
              keyboardType="email-address"
              placeholder="Email or Phone Number"
              control={control}
              rules={{
                required: true,
                // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
              }}
            />
            {errors?.username?.type === 'required' && (
              <Text style={styles.inputFieldErrorText}>
                Email or Phone Number is required.
              </Text>
            )}
            {errors?.username?.type === 'pattern' && (
              <Text style={styles.inputFieldErrorText}>
                Invalid Email format.
              </Text>
            )}
          </View>
          <View
            style={StyleSheet.flatten([
              styles.inputFieldContainer,
              { marginBottom: 10 },
            ])}>
            <InputField
              name="password"
              secureTextEntry
              placeholder="Password"
              control={control}
              rules={{
                required: true,
              }}
            />
            {errors.password && (
              <Text style={styles.inputFieldErrorText}>
                Password is required.
              </Text>
            )}
          </View>
          <View style={styles.forgotPasswordBtnContainer}>
            <TouchableOpacity>
              <View style={styles.forgotPasswordBtn}>
                <Text style={styles.forgotPasswordBtnText}>
                  Forgot Password?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.submitBtnContainer}>
            <TouchableHighlight
              underlayColor="#FFFFFF"
              onPress={handleSubmit(onSubmit)}>
              <View style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Login</Text>
              </View>
            </TouchableHighlight>
          </View>
          {isLoginError && (
            <Text style={styles.inputFieldErrorText}>
              Invalid username or password!
            </Text>
          )}
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  coffeeLogoContainer: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#522D07',
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginBottom: 75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  coffeeLogo: {
    height: 70,
    width: 70,
  },
  inputFieldContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputFieldErrorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'OpenSans',
    marginTop: 5,
  },
  forgotPasswordBtnContainer: {
    width: '80%',
    marginBottom: 10,
  },
  forgotPasswordBtn: {
    alignItems: 'flex-end',
  },
  forgotPasswordBtnText: {
    color: '#FE972E',
    fontFamily: 'OpenSans',
    fontSize: 14,
  },
  submitBtnContainer: {
    width: '80%',
    marginBottom: 15,
  },
  submitBtn: {
    borderRadius: 100,
    backgroundColor: '#FF972F',
    alignItems: 'center',
    paddingVertical: 12,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'OpenSans',
  },
});

export default LoginScreen;
