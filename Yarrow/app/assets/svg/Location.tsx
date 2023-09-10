import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00003 10.0725C10.2924 10.0725 11.34 9.02485 11.34 7.7325C11.34 6.44016 10.2924 5.3925 9.00003 5.3925C7.70769 5.3925 6.66003 6.44016 6.66003 7.7325C6.66003 9.02485 7.70769 10.0725 9.00003 10.0725Z" stroke="#110011" stroke-width="1.1"/>
<path d="M2.71503 6.3675C4.19253 -0.127498 13.815 -0.119998 15.285 6.375C16.1475 10.185 13.7775 13.41 11.7 15.405C10.1925 16.86 7.80753 16.86 6.29253 15.405C4.22253 13.41 1.85253 10.1775 2.71503 6.3675Z" stroke="#110011" stroke-width="1.1"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
