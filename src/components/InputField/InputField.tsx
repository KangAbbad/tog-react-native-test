import React from 'react';
import { Control, FieldName, useController } from 'react-hook-form';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

interface IFormValues {
  username: string;
  password: string;
}

interface IInputFieldProps {
  name: FieldName<IFormValues>;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  placeholder: string;
  control: Control<IFormValues>;
  rules: any;
}

const InputField = (props: IInputFieldProps) => {
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

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#522D07',
    width: '80%',
    paddingHorizontal: 30,
    fontFamily: 'OpenSans-Regular',
  },
});

export default InputField;
