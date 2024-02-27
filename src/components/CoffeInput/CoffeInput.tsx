import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import styles, {Input, InputMasked} from './styles';
import {Colors} from '../../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {TextInputMask} from 'react-native-masked-text';

interface ICoffeInput {
  name: string;
  control: any;
  returnText?: (val: string) => void;
  placeholderText?: string;
  secureTextEntry?: boolean;
  showEye?: boolean;
  changeSecureText?: () => void;
  mask?: string;
  isMasked?: boolean;
}

const CoffeInput = ({
  name,
  control,
  returnText,
  placeholderText,
  secureTextEntry,
  showEye,
  changeSecureText,
  mask,
  isMasked,
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
          <View style={styles.input}>
            {isMasked ? (
              <InputMasked
                autoCapitalize="none"
                value={value}
                options={{
                  mask: mask,
                }}
                type="custom"
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={showEye}
                placeholder={placeholderText}
                placeholderTextColor={Colors.lightGray}
                {...props}
              />
            ) : (
              <Input
                autoCapitalize="none"
                testID="input"
                placeholder={placeholderText}
                placeholderTextColor={Colors.lightGray}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={showEye}
                {...props}
              />
            )}
            {error && <Text>{error.message}</Text>}
            {secureTextEntry &&
              (showEye ? (
                <TouchableOpacity onPress={changeSecureText}>
                  <Entypo name="eye-with-line" size={20} color={Colors.gray} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={changeSecureText}>
                  <Entypo name="eye" size={20} color={Colors.gray} />
                </TouchableOpacity>
              ))}
          </View>
        )}
      />
    </View>
  );
};

export default CoffeInput;
