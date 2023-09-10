import storage from '@react-native-firebase/storage';
export const uploadImage = async (path: string, imageName: string) => {
  let reference = storage().ref(imageName); // 2
  await reference.putFile(path); // 3

  const url = await reference.getDownloadURL();
  if (url) return url;
  else return '';
};
