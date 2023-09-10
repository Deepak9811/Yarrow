import {Alert, Linking, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
import {messages} from './messages';

export const openCamera = async () => {
  const permissions =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const isPermission = await request(permissions);
  if (isPermission === 'granted') {
    try {
      const imageData: any = await launchCamera({
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: true,
      });
      return {
        type: imageData.assets[0].type,
        fileName: imageData.assets[0].fileName,
        uri: imageData.assets[0].uri,
      };
    } catch (e) {
      console.log(e);
    }
  }
  return null;
};
export const takeGalleryPermission = async () => {
  const permissions =
    Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.CAMERA]
      : [
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ];
  let isPermission = false;
  if (Platform.OS === 'android') {
    const x = await request(permissions[0]);
    const y = await request(permissions[1]);
    if (x === 'granted' && y === 'granted') {
      isPermission = true;
    }
  } else {
    const x = await request(permissions[0]);
    if (x === 'granted') {
      isPermission = true;
    }
  }
  console.log('Gallery', isPermission);
  if (isPermission) {
    return true;
  }
  Alert.alert(
    messages.permissionDenied,
    messages.galleryPermissionDenied,
    [
      {
        text: 'Go to Settings',
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );

  return false;
};
export const openGallery = async () => {
  // const isPermissionGranted = await takeGalleryPermission();

  // if (isPermissionGranted) {
  try {
    const imageData: any = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });
    return {
      type: imageData.assets[0].type,
      fileName: imageData.assets[0].fileName,
      uri: imageData.assets[0].uri,
    };
  } catch (e) {
    console.log('error :->>', e);
  }
  // }
  // return null;
};
