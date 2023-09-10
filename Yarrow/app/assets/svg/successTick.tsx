import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `<svg width="243" height="243" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1292_997" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="243" height="243">
<circle cx="121.5" cy="121.5" r="121.5" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1292_997)">
<path d="M143 -31H107L124.5 110L143 -31Z" fill="url(#paint0_linear_1292_997)"/>
<path d="M128.5 112.5L168 -31H206.5L128.5 112.5Z" fill="url(#paint1_linear_1292_997)"/>
<path d="M249.5 -30.5L132 114.5L292 -8.5V-30.5H249.5Z" fill="url(#paint2_linear_1292_997)"/>
<path d="M293 32L135 117.5L293 75V32Z" fill="url(#paint3_linear_1292_997)"/>
<path d="M294 104L136.5 122.5L294 141V104Z" fill="url(#paint4_linear_1292_997)"/>
<path d="M130.5 125.5L293.5 172V213.5L130.5 125.5Z" fill="url(#paint5_linear_1292_997)"/>
<path d="M134.5 133.5L293.5 257V286H252L134.5 133.5Z" fill="url(#paint6_linear_1292_997)"/>
<path d="M133 137L216 294.5L175.5 304L133 137Z" fill="url(#paint7_linear_1292_997)"/>
<path d="M143.5 320L126 132.5L101.5 320H143.5Z" fill="url(#paint8_linear_1292_997)"/>
<path d="M120.5 135.5L68.5 319.5L22.5 305.5L120.5 135.5Z" fill="url(#paint9_linear_1292_997)"/>
<path d="M119.5 128.5L-42 330.5V255.5L119.5 128.5Z" fill="url(#paint10_linear_1292_997)"/>
<path d="M117 124.5L-42.5 216.5V176.5L117 124.5Z" fill="url(#paint11_linear_1292_997)"/>
<path d="M115 123.5L-43 141V104.5L115 123.5Z" fill="url(#paint12_linear_1292_997)"/>
<path d="M112 119L-43.5 75.5V33L112 119Z" fill="url(#paint13_linear_1292_997)"/>
<path d="M-54 -22L113 115.5L-2.5 -40H-31.5L-54 -22Z" fill="url(#paint14_linear_1292_997)"/>
<path d="M76.5 -56L119.5 114L25 -56H76.5Z" fill="url(#paint15_linear_1292_997)"/>
<circle cx="122" cy="121" r="41.5" fill="#F89808" stroke="white" stroke-width="5"/>
</g>
<path d="M137.75 111.25L116.75 132.25L107.125 122.625L109.592 120.158L116.75 127.298L135.283 108.783L137.75 111.25Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1292_997" x1="125" y1="-0.500001" x2="125" y2="102" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint1_linear_1292_997" x1="139" y1="82" x2="168" y2="13.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear_1292_997" x1="212" y1="37" x2="170.351" y2="102.33" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint3_linear_1292_997" x1="163.5" y1="106.5" x2="246.935" y2="74.8299" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint4_linear_1292_997" x1="247.5" y1="122" x2="202.934" y2="67.909" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint5_linear_1292_997" x1="130.5" y1="122.865" x2="309.211" y2="227.728" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear_1292_997" x1="216.5" y1="206" x2="122.168" y2="143.34" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint7_linear_1292_997" x1="144" y1="157.5" x2="175" y2="232" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint8_linear_1292_997" x1="123" y1="242.5" x2="126" y2="165.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint9_linear_1292_997" x1="109" y1="161.5" x2="134.771" y2="200.115" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint10_linear_1292_997" x1="34" y1="207.5" x2="99" y2="140" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint11_linear_1292_997" x1="83.5" y1="141.5" x2="12.1745" y2="179.122" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint12_linear_1292_997" x1="-3" y1="118.5" x2="115" y2="123" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint13_linear_1292_997" x1="80.5" y1="105" x2="8.42139" y2="77.5175" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint14_linear_1292_997" x1="35.5" y1="35.5" x2="96" y2="94.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFF1DB"/>
</linearGradient>
<linearGradient id="paint15_linear_1292_997" x1="102.5" y1="79" x2="59.2746" y2="62.2063" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBF5"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
