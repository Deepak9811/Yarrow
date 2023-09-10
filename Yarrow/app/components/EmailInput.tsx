import {Input} from 'native-base';
import React from 'react';
import Email from '../assets/svg/Email';
import {widthToDp} from '../helpers/responsive';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

interface Props {
  value: string;
  onChange: Function;
}
const EmailInput = (props: Props) => {
  return (
    <Input
      leftElement={<Email width={10} height={7} />}
      height={52}
      width={widthToDp(85)}
      borderRadius={8}
      borderColor={Colors.borderColor}
      placeholder={'Email address'}
      fontFamily={Fonts.PoppinsRegular}
      fontWeight={'400'}
      fontSize={14}
      value={props.value}
      onChangeText={text => {
        props.onChange(text.toString());
      }}
      autoCapitalize={'none'}
      color={Colors.primaryText}
      placeholderTextColor={Colors.secondaryText}
    />
  );
};

export default EmailInput;
