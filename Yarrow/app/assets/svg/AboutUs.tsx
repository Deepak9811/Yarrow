import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66675 18.3333H18.3334" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1667 1.66666H5.83333C3.33333 1.66666 2.5 3.15833 2.5 5V18.3333H17.5V5C17.5 3.15833 16.6667 1.66666 14.1667 1.66666Z" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83325 13.75H8.33325" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 13.75H14.1667" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83325 10H8.33325" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 10H14.1667" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83325 6.25H8.33325" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 6.25H14.1667" stroke="#110011" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
