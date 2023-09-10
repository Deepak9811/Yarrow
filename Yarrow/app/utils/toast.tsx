import Toast from 'react-native-root-toast';

export const notifyToast = (message: string) =>
  Toast.show(message, {
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    duration: Toast.durations.LONG,
  });
