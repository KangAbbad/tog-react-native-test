import React from 'react';
import { Control, FieldName, useController, useForm } from 'react-hook-form';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardTypeOptions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

interface IFormValues {
  username: string;
  password: string;
}

interface IInputField {
  name: FieldName<IFormValues>;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  placeholder: string;
  control: Control<IFormValues>;
  rules: any;
}

const InputField = (props: IInputField) => {
  const { name, keyboardType, secureTextEntry, placeholder, control, rules } =
    props;
  const { field } = useController<IFormValues>({
    control,
    defaultValue: '',
    name,
    rules,
  });

  return (
    <TextInput
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={field.value}
      style={styles.inputField}
      placeholder={placeholder}
      onChangeText={field.onChange}
    />
  );
};

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit = (data: any) => console.log(data);

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
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
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
  },
  coffeeLogoContainer: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#522D07',
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginBottom: 50,
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
  inputField: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#522D07',
    width: '80%',
    paddingHorizontal: 30,
    fontFamily: 'OpenSans',
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
