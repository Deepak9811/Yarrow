import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.594 10.182C18.594 11.8455 18.1007 13.4716 17.1765 14.8548C16.2524 16.238 14.9388 17.316 13.402 17.9527C11.8651 18.5893 10.174 18.7559 8.54244 18.4315C6.91089 18.107 5.41219 17.306 4.23585 16.1298C3.05952 14.9536 2.25837 13.455 1.93371 11.8235C1.60906 10.192 1.77548 8.50087 2.41194 6.96394C3.04839 5.42701 4.1263 4.11332 5.50935 3.18899C6.8924 2.26466 8.51848 1.77119 10.182 1.771C11.2866 1.77086 12.3804 1.98832 13.401 2.41096C14.4216 2.83359 15.349 3.45312 16.1301 4.23417C16.9112 5.01521 17.5309 5.94248 17.9536 6.96301C18.3764 7.98355 18.594 9.07736 18.594 10.182V10.182Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.479 19.479L17.708 17.708" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 5.091C11.3814 5.13658 12.1156 5.36439 12.765 5.755C13.3651 6.22635 13.8449 6.83329 14.165 7.526" stroke="#191919" stroke-width="1.2" stroke-linecap="round"/>
</svg>
`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
