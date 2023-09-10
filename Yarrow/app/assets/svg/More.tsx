import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M24 166 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z"/>
<path d="M124 166 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
-13 2 -25 -3 -28 -12z"/>
<path d="M224 166 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
-13 2 -25 -3 -28 -12z"/>
</g>
</svg>



`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
