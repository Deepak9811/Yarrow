import {Box, Pressable, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import BackIconPrimary from '../assets/svg/BackIconPrimary';
import CloseIconPrimary from '../assets/svg/CloseIconPrimary';
import {heightToDp, widthToDp} from '../helpers/responsive';
import {goBack} from '../services/navigationRef';
import {Colors} from '../utils/color';

const AuthAppBar = () => {
  return (
    <View style={styles.appBar}>
      <Pressable onPress={() => goBack()}>
        <Box style={styles.button}>
          <BackIconPrimary height={5} width={5} />
        </Box>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  appBar: {
    width: widthToDp(100),
    height: heightToDp(8),
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
  },
  button: {
    height: widthToDp(10),
    width: widthToDp(10),
    backgroundColor: Colors.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    elevation: 15,
    shadowOffset: {width: 5, height: 5},
    shadowColor: Colors.primaryText,
    shadowOpacity: 0.2,

    // shadowRadius: 10,
  },
});
export default AuthAppBar;
