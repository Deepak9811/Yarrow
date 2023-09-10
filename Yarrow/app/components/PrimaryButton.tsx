import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import DownArrow from '../assets/svg/DownArrow';
import RightArrow from '../assets/svg/RightArrow';
import UpArrow from '../assets/svg/UpArrow';
import {responsiveFontSize} from '../helpers/responsive';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
interface IProps {
  onPress: Function;
  title: string;
  width: number;
  marginTop?: number;
  height: number;
  textFontSize: number;
  marginBottom?: number;
  showArrow?: boolean;
  hideArrow?: boolean;
}
const PrimaryButton = (props: IProps) => {
  return (
    <Button
      mb={props.marginBottom}
      mt={props.marginTop}
      style={[styles.btn]}
      width={props.width}
      height={props.height}
      onPress={() => props.onPress()}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          fontSize={responsiveFontSize(props.textFontSize)}
          style={[styles.text]}>
          {props.title}{' '}
        </Text>
        {props.hideArrow && (
          <>
            {props.showArrow ? (
              <View
                style={{
                  // marginLeft: 5,
                  marginTop: 6,
                  transform: [{rotate: '90deg'}],
                }}>
                <UpArrow width={4} height={4} />
              </View>
            ) : (
              <View
                style={
                  {
                    // marginLeft: 5,
                    // marginTop: 6,
                    // transform: [{rotate: '-90deg'}],
                  }
                }>
                <DownArrow width={4} height={4} />
              </View>
            )}
          </>
        )}
      </View>
    </Button>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,

    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',

    // textAlign: 'center',
  },
});
export default PrimaryButton;
