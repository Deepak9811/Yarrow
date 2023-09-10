import {Input, View} from 'native-base';
import React from 'react';
import Key from '../assets/svg/Key';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

import {widthToDp} from '../helpers/responsive';
import {Pressable} from 'react-native';
import EyeSlash from '../assets/svg/EyeSlash';
interface Props {
  value: string;
  onChange: Function;
  marginTop: number;
  secureText: boolean;
  onPressUnsecure: Function;
  placeHolder:string
}
const PasswordInput = (props: Props) => {
  return (
    <Input
      mt={props.marginTop}
      leftElement={<Key width={10} height={6} />}
      height={52}
      width={widthToDp(85)}
      borderRadius={8}
      borderColor={Colors.borderColor}
      placeholder={props.placeHolder}
      fontFamily={Fonts.PoppinsRegular}
      fontWeight={'400'}
      fontSize={14}
      value={props.value}
      onChangeText={text => {
        props.onChange(text.toString());
      }}
      color={Colors.primaryText}
      placeholderTextColor={Colors.secondaryText}
      secureTextEntry={props.secureText}
      rightElement={
        <Pressable onPress={() => props.onPressUnsecure()}>
          <EyeSlash width={10} height={6} />
        </Pressable>
      }
    />
  );
};
export default PasswordInput;
