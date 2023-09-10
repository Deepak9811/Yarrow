import database from '@react-native-firebase/database';
import {
  Divider,
  HStack,
  Image,
  Input,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import BackIconSecondary from '../assets/svg/BackIconSecondary';
import Edit from '../assets/svg/Edit';
import EditGrey from '../assets/svg/EditGrey';
import AppLoader from '../components/AppLoader';
import PrimaryButton from '../components/PrimaryButton';
import {openCamera, openGallery} from '../helpers/cameraHelperFunctions';
import {defaultProfileImage} from '../helpers/constant';
import {messages} from '../helpers/messages';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {uploadImage} from '../helpers/uploadImage';
import {IProfile} from '../model/profile.model';
import {goBack} from '../services/navigationRef';
import {Colors} from '../utils/color';
import {Fonts} from '../utils/fonts';
import {notifyToast} from '../utils/toast';

const EditProfileScreen = (props: any) => {
  const {data, profileKey} = props.route.params;
  const [profileData, setProfileData] = useState<IProfile>(data);
  const [profileUrl, setProfileUrl] = useState<string>(data.profilePic);
  const [name, setName] = useState(data.name);
  const [password, setPassword] = useState(data.password);
  const [phoneNo, setPhoneNo] = useState(data.phoneNumber);
  const [isEditName, setIsEditName] = useState(false);
  const [isEditPhoneNumber, setIsEditPhoneNo] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onUpdate = async (
    usernane: string,
    userPassword: string,
    phoneNumber: string,
  ) => {
    if (name && password && phoneNumber) {
      setLoading(true);
      await database()
        .ref('users')
        .child(profileKey)
        .update({
          name: usernane,
          password: userPassword,
          email: profileData.email,
          phoneNumber: phoneNumber,
          profilePic: profileUrl === defaultProfileImage ? '' : profileUrl,
          isPayment: profileData.isPayment,
          paymentType: profileData.paymentType,
          address: profileData.address,
          createdOn: profileData.createdOn,
        });
      setLoading(false);
      notifyToast(messages.profileUpdated);
      goBack();
    } else {
      notifyToast(messages.requiredFieldsMissing);
    }
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={{uri: profileUrl}}
              style={styles.profilePic}
              alt={'pic'}
            />
            <HStack style={styles.buttons}>
              <Pressable style={styles.button} onPress={() => goBack()}>
                <BackIconSecondary width={4} height={4} />
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}>
                <Edit width={4} height={4} />
              </Pressable>
            </HStack>
          </View>
          <View mx={10} mt={5} mb={10}>
            <Input
              mt={5}
              borderRadius={8}
              placeholder={'Name*'}
              placeholderTextColor={Colors.secondaryText}
              fontSize={responsiveFontSize(14)}
              value={name}
              onChangeText={text => setName(text)}
              // height={50}
              backgroundColor={Colors.background1}
              // editable={isEditName}
              rightElement={
                <Pressable onPress={() => setIsEditName(!isEditName)} mr={5}>
                  <EditGrey width={6} height={6} />
                </Pressable>
              }
              width={widthToDp(80)}
              paddingTop={5}
              paddingBottom={5}
            />
            <Input
              mt={5}
              borderRadius={8}
              placeholderTextColor={Colors.secondaryText}
              fontSize={responsiveFontSize(14)}
              value={profileData.email}
              height={50}
              backgroundColor={Colors.background1}
              editable={false}
              width={widthToDp(80)}
            />
            <Input
              mt={5}
              borderRadius={8}
              placeholder={'Phone Number*'}
              keyboardType={'phone-pad'}
              placeholderTextColor={Colors.secondaryText}
              fontSize={responsiveFontSize(14)}
              value={phoneNo}
              onChangeText={text => setPhoneNo(text)}
              // height={50}
              backgroundColor={Colors.background1}
              // editable={isEditPhoneNumber}
              width={widthToDp(80)}
              rightElement={
                <Pressable
                  onPress={() => setIsEditPhoneNo(!isEditPhoneNumber)}
                  mr={5}>
                  <EditGrey width={6} height={6} />
                </Pressable>
              }
              paddingTop={5}
              paddingBottom={5}
            />
            <Input
              mt={5}
              mb={10}
              borderRadius={8}
              placeholder={'Password*'}
              placeholderTextColor={Colors.secondaryText}
              fontSize={responsiveFontSize(14)}
              value={password}
              onChangeText={text => setPassword(text)}
              // height={50}
              secureTextEntry
              backgroundColor={Colors.background1}
              // editable={isEditPassword}
              rightElement={
                <Pressable
                  onPress={() => setIsEditPassword(!isEditPassword)}
                  mr={5}>
                  <EditGrey width={6} height={6} />
                </Pressable>
              }
              width={widthToDp(80)}
              paddingTop={5}
              paddingBottom={5}
            />
            <PrimaryButton
              onPress={async () => {
                await onUpdate(name.trim(), password.trim(), phoneNo.trim());
              }}
              title={'Update'}
              width={widthToDp(80)}
              height={50}
              textFontSize={14}
            />
          </View>
          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            avoidKeyboard
            justifyContent="flex-end"
            bottom="4"
            size="lg">
            <Modal.Content style={styles.modalBodyContainer}>
              <Divider mt={3} thickness="5" w={20} />
              <Pressable
                mt={3}
                style={styles.modalBtn}
                onPress={async () => {
                  setModalVisible(false);
                  const galleryData = await openGallery();
                  console.log(galleryData);
                  if (galleryData) {
                    setLoading(true);
                    const url = await uploadImage(
                      galleryData.uri,
                      galleryData.fileName,
                    );
                    setProfileUrl(url);
                    setLoading(false);
                  }
                }}>
                <Text style={styles.modalBtnTxt}>Upload from gallery</Text>
              </Pressable>
              <Pressable
                mb={3}
                style={styles.modalBtn}
                onPress={async () => {
                  setModalVisible(false);
                  const cameraData = await openCamera();
                  console.log(cameraData);
                  if (cameraData) {
                    setLoading(true);
                    const url = await uploadImage(
                      cameraData.uri,
                      cameraData.fileName,
                    );
                    setProfileUrl(url);
                    setLoading(false);
                  }
                }}>
                <Text style={styles.modalBtnTxt}>Take picture</Text>
              </Pressable>
            </Modal.Content>
          </Modal>
          {loading && <AppLoader />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profilePic: {
    width: widthToDp(100),
    height: heightToDp(40),
  },
  buttons: {
    width: widthToDp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 10,
  },
  button: {
    height: widthToDp(10),
    width: widthToDp(10),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black20,
  },
  modalBodyContainer: {
    width: widthToDp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: Colors.borderColor,
    height: heightToDp(7),
  },
  modalBtnTxt: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: responsiveFontSize(18),
    color: Colors.primary,
  },
});
export default EditProfileScreen;
