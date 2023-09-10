import {HStack, Pressable, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

import CloseIconPrimary from '../assets/svg/CloseIconPrimary';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {goBack} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

const ActivityScreen = (props: any) => {
  const {data} = props.route.params;
  console.log('data show here :->>>>>>>>>>>', data);
  return (
    <SafeAreaView>
      <HStack style={styles.appBar}>
        <Text noOfLines={1} style={styles.title}>
          {/* #{data.id} */}
        </Text>
        <Pressable onPress={() => goBack()}>
          <CloseIconPrimary width={4} height={4} />
        </Pressable>
      </HStack>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View mx={5} mt={5} height={heightToDp(80)}>
          <Text my={5} style={styles.text}>
            {data.title}
          </Text>
          <View style={{marginBottom: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 10,
              }}>
              <View>
                <Text style={{fontSize: 15, color: Colors.primaryText}}>
                  Requested
                </Text>
              </View>
              <Text style={{fontSize: 15, color: Colors.primaryText}}>
                Out for pick up
              </Text>
              <Text style={{fontSize: 15, color: Colors.inActive}}>Picked</Text>
            </View>
            <View
              style={{
                borderRadius: 100,
                borderColor: '#fff',
                borderWidth: 1,
                width: 10,
                height: 10,
                // marginTop: 10,
                // marginBottom: -12,
                zIndex: 99999,
                left: '15%',
                position: 'absolute',
                bottom: 5,
                backgroundColor: 'black',
              }}
            />
            <View
              style={{
                borderRadius: 100,
                borderColor: '#fff',
                borderWidth: 1,
                width: 10,
                height: 10,
                // marginTop: 10,
                // marginBottom: -12,
                zIndex: 99999,
                left: '50%',
                position: 'absolute',
                bottom: 5,
                backgroundColor: 'black',
              }}
            />
            <View
              style={{
                borderRadius: 100,
                borderColor: '#fff',
                borderWidth: 1,
                width: 10,
                height: 10,
                // marginTop: 10,
                // marginBottom: -12,
                zIndex: 99999,
                right: '10%',
                position: 'absolute',
                bottom: 5,
                backgroundColor: Colors.inActive,
              }}
            />

            <View
              style={{
                borderWidth: 4,
                borderRadius: 10,
                borderColor: Colors.inActive,
              }}
            />
          </View>
          {/* <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Polyline
              coordinates={[
                {
                  latitude: 37.78825,
                  longitude: -122.4324,
                },
                {
                  latitude: 36.7783,
                  longitude: -119.4179,
                },
              ]}
            />
          </MapView> */}

          {/* <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              John will be at your place in next 5 Mins
            </Text>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ActivityScreen;
const styles = StyleSheet.create({
  appBar: {
    width: widthToDp(100),
    height: heightToDp(8),
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(22),
    fontWeight: '600',
    lineHeight: 32,
    width: widthToDp(70),
  },
  map: {
    height: heightToDp(60),

    width: '100%',
    borderRadius: 10,
  },
  text: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(22),
    fontWeight: '500',
    lineHeight: 32,
    width: widthToDp(80),
  },
});
