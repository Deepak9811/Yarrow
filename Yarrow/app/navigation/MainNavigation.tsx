import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../helpers/screenConstant';
import ActivityScreen from '../screens/ActivityScreen';
import AddLocationScreen from '../screens/AddLocationScreen';
import BuyPremiumScreen from '../screens/BuyPremiumScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import MyItemsScreen from '../screens/MyItemsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import StripePaymentScreen from '../screens/StripePaymentScreen';
import Tabs from './BottomTab';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.splash}>
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.splash}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.onBoarding}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.signUp}
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.forgotPass}
        component={ForgotPassScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.login}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={Screens.bottomTab}
        component={Tabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.buyPremium}
        component={BuyPremiumScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.stripeScreen}
        component={StripePaymentScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.editProfile}
        component={EditProfileScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.itemDetail}
        component={ItemDetailScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.myItems}
        component={MyItemsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.notification}
        component={NotificationScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.addLocation}
        component={AddLocationScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.activity}
        component={ActivityScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
