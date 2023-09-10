import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Add from '../assets/svg/Add';
import HomeActive from '../assets/svg/HomeActive';
import HomeInActive from '../assets/svg/HomeInActive';
import ProfileActive from '../assets/svg/ProfileActive';
import ProfileInActive from '../assets/svg/ProfileInActive';
import {heightToDp, widthToDp} from '../helpers/responsive';
import {Screens} from '../helpers/screenConstant';
import AddItemScreen from '../screens/AddItemScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const CustomTabBarButton = ({children, onPress}: any) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -25,
      }}>
      <View
        style={{
          width: 55,
          height: 55,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          backgroundColor: 'rgba(248, 152, 8, 0.3)',
          borderRadius: 30,
        }}>
        <View
          style={{
            width: 45,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: Colors.primary,
            borderRadius: 25,
          }}>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      initialRouteName={Screens.home}
      screenOptions={{
        tabBarStyle: {
          height: heightToDp(8),
          backgroundColor: Colors.white,
          position: 'absolute',
          borderRadius: 100,
          paddingVertical: heightToDp(2),
          marginBottom: 20,
          width: widthToDp(80),
          shadowColor: Colors.black,
          shadowOffset: {width: 2, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 5,
          marginLeft: widthToDp(10),
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={Screens.home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <HomeActive width={6} height={6} />

                    <Text style={styles.textActive}>Home</Text>
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <HomeInActive width={6} height={6} />

                    <Text style={styles.textInActive}>Home</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={Screens.addItem}
        component={AddItemScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: tabInfo => {
            return <Add width={8} height={8} />;
          },
          tabBarButton: props => {
            return <CustomTabBarButton {...props}></CustomTabBarButton>;
          },
        }}
      />

      <Tab.Screen
        name={Screens.profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <ProfileActive width={6} height={6} />
                    <Text style={styles.textActive}>Profile</Text>
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <ProfileInActive width={6} height={6} />
                    <Text style={styles.textInActive}>Profile</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
const styles = StyleSheet.create({
  midIcon: {
    height: 80,
    width: 80,
    backgroundColor: Colors.primary,
    borderRadius: 40,
    position: 'absolute',
  },
  textActive: {
    color: Colors.primary,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,

    marginTop: 6,
  },
  textInActive: {
    color: Colors.inActive,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,
    marginTop: 6,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  ////////
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
