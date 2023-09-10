import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.60841 16.4167C6.29175 15.6833 7.33342 15.7417 7.93342 16.5417L8.77508 17.6667C9.45008 18.5583 10.5417 18.5583 11.2167 17.6667L12.0584 16.5417C12.6584 15.7417 13.7001 15.6833 14.3834 16.4167C15.8667 18 17.0751 17.475 17.0751 15.2583V5.86666C17.0834 2.50833 16.3001 1.66666 13.1501 1.66666H6.85008C3.70008 1.66666 2.91675 2.50833 2.91675 5.86666V15.25C2.91675 17.475 4.13341 17.9917 5.60841 16.4167Z" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.74681 9.16667H6.75429" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.08203 9.16667H13.6654" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.74681 5.83333H6.75429" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.08203 5.83334H13.6654" stroke="#110011" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
