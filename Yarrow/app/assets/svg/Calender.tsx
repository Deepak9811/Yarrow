import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.5V3.75" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 1.5V3.75" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.625 6.8175H15.375" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.771 10.275H11.7778" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.771 12.525H11.7778" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99661 10.275H9.00335" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99661 12.525H9.00335" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.22073 10.275H6.22747" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.22073 12.525H6.22747" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
