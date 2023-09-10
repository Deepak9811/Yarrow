import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.6416 6.2L9.99993 10.4583L17.3083 6.225" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18.0083V10.45" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.27503 2.06667L3.82503 4.53333C2.8167 5.09167 1.9917 6.49167 1.9917 7.64167V12.35C1.9917 13.5 2.8167 14.9 3.82503 15.4583L8.27503 17.9333C9.22503 18.4583 10.7834 18.4583 11.7334 17.9333L16.1834 15.4583C17.1917 14.9 18.0167 13.5 18.0167 12.35V7.64167C18.0167 6.49167 17.1917 5.09167 16.1834 4.53333L11.7334 2.05833C10.775 1.53333 9.22503 1.53333 8.27503 2.06667Z" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
