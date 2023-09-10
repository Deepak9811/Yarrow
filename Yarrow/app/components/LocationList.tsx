import {FlatList, HStack, Pressable, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IPlaces} from '../model/places.model';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

interface Props {
  data: IPlaces[];
  onPress: Function;
  height: number;
}
const LocationList = (prop: Props) => {
  const renderItem = (item: IPlaces) => {
    return (
      <Pressable style={styles.item} onPress={() => prop.onPress(item)}>
        <HStack style={styles.itemRow}>
          <VStack>
            <Text style={styles.placeText}>
              {item.description.split(',')[0]}
            </Text>
            <Text style={styles.countryText}>{item.description}</Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        // height: heightToDp(prop.height),
        width: widthToDp(100),
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        mx={5}
        data={prop.data}
        renderItem={item => renderItem(item.item)}
        keyExtractor={item => item.place_id}
      />

      {/* <Pressable
        mx={5}
        style={{
          marginTop: 10,
          borderRadius: 10,
          padding: 15,
          backgroundColor: Colors.borderColor,
          alignItems: 'center',
        }}>
        <Text style={{}}>Custom address add</Text>
      </Pressable> */}

      {/* <View mx={5}>
        <PrimaryButton
          onPress={async () => await onSave()}
          title={'Custom address add'}
          width={widthToDp(90)}
          height={50}
          textFontSize={16}
          marginBottom={40}
          marginTop={5}
        />
      </View> */}
    </View>
  );
};
export default LocationList;
const styles = StyleSheet.create({
  item: {
    width: widthToDp(90),
    height: heightToDp(11),
    backgroundColor: Colors.transparent,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
  },
  itemRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  placeText: {
    color: Colors.primaryText,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    fontWeight: '500',
  },
  countryText: {
    color: Colors.secondaryText,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(13),
    fontWeight: '400',
  },
});
