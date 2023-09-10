import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1334 9.05834C10.05 9.05 9.95005 9.05 9.85838 9.05834C7.87505 8.99167 6.30005 7.36667 6.30005 5.36667C6.30005 3.325 7.95005 1.66667 10 1.66667C12.0417 1.66667 13.7001 3.325 13.7001 5.36667C13.6917 7.36667 12.1167 8.99167 10.1334 9.05834Z" stroke="#110011" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.9666 12.1333C3.94993 13.4833 3.94993 15.6833 5.9666 17.025C8.25827 18.5583 12.0166 18.5583 14.3083 17.025C16.3249 15.675 16.3249 13.475 14.3083 12.1333C12.0249 10.6083 8.2666 10.6083 5.9666 12.1333Z" stroke="#110011" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
