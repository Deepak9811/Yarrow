import {NavigationContainer} from '@react-navigation/native';
import {StripeProvider} from '@stripe/stripe-react-native';
import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import * as RNIap from 'react-native-iap';
// import {
//   ProductPurchase,
//   purchaseUpdatedListener,
//   SubscriptionPurchase,
// } from 'react-native-iap';
import {RootSiblingParent} from 'react-native-root-siblings';
import MainNavigation from './app/navigation/MainNavigation';
import {navigationRef} from './app/services/navigationRef';
import {Key} from './app/utils/StripeKey';

const App = () => {
  // let purchaseUpdateSubscription = null;

  // const initializeInApp = async () => {
  //   RNIap.initConnection()
  //     .then(() => {
  //       RNIap.flushFailedPurchasesCachedAsPendingAndroid()
  //         .then(() => {
  //           purchaseUpdateSubscription = purchaseUpdatedListener(
  //             (purchase: SubscriptionPurchase | ProductPurchase) => {
  //               console.log('purchaseUpdatedListener', purchase);
  //               const receipt = purchase.transactionReceipt;
  //               console.log('receipt', receipt);
  //             },
  //           );
  //         })
  //         .catch(() => {});
  //     })
  //     .catch(() => {
  //       initializeInApp();
  //     });
  // };

  // useEffect(() => {
  //   initializeInApp();
  //   () => {
  //     RNIap.endConnection();
  //   };
  // }, []);

  return (
    <StripeProvider publishableKey={Key.test_key}>
      <NativeBaseProvider>
        <RootSiblingParent>
          <NavigationContainer ref={navigationRef}>
            {/* <StatusBar backgroundColor={Colors.primary} /> */}
            <MainNavigation />
          </NavigationContainer>
        </RootSiblingParent>
      </NativeBaseProvider>
    </StripeProvider>
  );
};

export default App;
