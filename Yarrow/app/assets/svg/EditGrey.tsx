import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.94501 2.69998L3.78751 9.21748C3.55501 9.46498 3.33001 9.95248 3.28501 10.29L3.00751 12.72C2.91001 13.5975 3.54001 14.1975 4.41001 14.0475L6.82501 13.635C7.16251 13.575 7.63501 13.3275 7.86751 13.0725L14.025 6.55498C15.09 5.42998 15.57 4.14748 13.9125 2.57998C12.2625 1.02748 11.01 1.57498 9.94501 2.69998Z" stroke="#8E8E8E" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.91748 3.78748C9.23998 5.85748 10.92 7.43998 13.005 7.64998" stroke="#8E8E8E" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25 16.5H15.75" stroke="#8E8E8E" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
