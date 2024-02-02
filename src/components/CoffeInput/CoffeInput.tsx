import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import styles from './styles';
import {Colors} from '../../constants/Colors';

interface ICoffeInput {
  name: string;
  control: any;
  returnText?: (val: string) => void;
  placeholderText?: string;
}

const CoffeInput = ({
  name,
  control,
  returnText,
  placeholderText,
  ...props
}: ICoffeInput) => {
  return (
    <View style={styles.container} testID="container">
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <TextInput
              testID="input"
              style={styles.input}
              placeholder={placeholderText}
              placeholderTextColor={Colors.lightGray}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...props}
            />
            {error && <Text>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default CoffeInput;
