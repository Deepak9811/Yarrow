import database from '@react-native-firebase/database';
import {FlatList, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppLoader from '../components/AppLoader';
import CustomAppBar from '../components/CustomAppBar';
import EmptyStateComponent from '../components/EmptyStateComponent';
import HomeSingleItem from '../components/HomeSingleItem';
import {heightToDp, widthToDp} from '../helpers/responsive';
import {getEmail} from '../helpers/storage';
import {IItem} from '../model/item.model';
import {Colors} from '../utils/color';

const MyItemsScreen = () => {
  const [data, setData] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getEmail().then(email => {
      database()
        .ref('posts')
        .once('value')
        .then((snapshot: any) => {
          if (snapshot.val()) {
            const resp: IItem[] = Object.values(snapshot.val());
            const userPost = resp.filter(
              (item: IItem) => item.createdBy === email,
            );
            console.log('user post', userPost);
            setData(userPost);
          }
          setLoading(false);
        });
    });
  }, []);

  return (
    <SafeAreaView style={styles.fullScreen}>
      <CustomAppBar title={'My Items'} />
      {data.length > 0 ? (
        <FlatList
          data={data}
          style={styles.flatList}
          renderItem={item => <HomeSingleItem item={item.item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View mt={5} />}
        />
      ) : (
        <EmptyStateComponent
          text={'No Data to Show'}
          height={60}
          width={60}
          marginTop={10}
        />
      )}
      {loading && <AppLoader />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flatList: {
    marginLeft: widthToDp(10),
    marginTop: 20,
    height: heightToDp(90),
  },
  fullScreen: {
    backgroundColor: Colors.white,
    height: heightToDp(100),
    width: widthToDp(100),
  },
});
export default MyItemsScreen;
