import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.53 9.47L9.46998 14.53C8.81998 13.88 8.41998 12.99 8.41998 12C8.41998 10.02 10.02 8.42 12 8.42C12.99 8.42 13.88 8.82 14.53 9.47Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73C8.47003 3.73 5.18003 5.81 2.89003 9.41C1.99003 10.82 1.99003 13.19 2.89003 14.6C3.68003 15.84 4.60003 16.91 5.60003 17.77" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.41998 19.53C9.55998 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39999C20.78 8.87999 20.42 8.38999 20.05 7.92999" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.47 14.53L2 22" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L14.53 9.47" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
