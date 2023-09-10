import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="55" height="61" viewBox="0 0 55 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_19_304)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 24.1673C7.00251 18.8172 9.16353 13.6871 13.0078 9.90519C16.8522 6.12327 22.065 3.99918 27.5 4C38.8192 4 48 13.0312 48 24.1673C48 32.4689 43.7802 39.0474 39.2575 43.4932C37.2583 45.4697 35.0177 47.1945 32.5872 48.6281C31.5716 49.218 30.6223 49.6837 29.796 50.0004C29.017 50.3046 28.2002 50.5405 27.5 50.5405C26.7998 50.5405 25.983 50.3046 25.204 50.0004C24.2393 49.6139 23.3062 49.1552 22.4128 48.6281C19.9823 47.1945 17.7418 45.4697 15.7425 43.4932C11.2198 39.0474 7 32.4689 7 24.1673Z" fill="white"/>
</g>
<circle cx="27.5" cy="24.5" r="14.9595" fill="url(#paint0_linear_19_304)"/>
<path d="M28.7591 32.1392V23.1568L19.1891 18.8755V27.8579L28.7591 32.1392Z" fill="#AF835C"/>
<path d="M26.4925 16.1892L19.1891 18.8755L28.7591 23.1569L36.1465 20.3866L26.4925 16.1892Z" fill="#E1C190"/>
<path d="M36.1467 29.4529L28.7593 32.1392V23.1568L36.1467 20.3865V29.4529Z" fill="#E1C190"/>
<path d="M23.4706 17.2805L22.1274 17.7842L31.8654 22.1494V24.416L33.0406 23.9123V21.7297L23.4706 17.2805Z" fill="#A87A54"/>
<path d="M33.0404 29.1171L31.8651 29.6208V31.0086L33.0404 30.581V29.1171Z" fill="#A87A54"/>
<path d="M33.7961 24.416L31.1937 25.4234V29.4529L33.7961 28.4455V24.416Z" fill="white"/>
<path d="M31.6135 26.0111L33.3764 25.2555" stroke="#E1C190" stroke-width="0.2" stroke-linecap="round"/>
<path d="M31.6974 26.6826L33.4603 25.9271" stroke="#E1C190" stroke-width="0.2" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_19_304" x="0" y="0" width="55" height="60.5405" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.183333 0 0 0 0 0.183333 0 0 0 0 0.183333 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_304"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_304" result="shape"/>
</filter>
<linearGradient id="paint0_linear_19_304" x1="13.5215" y1="19.023" x2="40.988" y2="28.996" gradientUnits="userSpaceOnUse">
<stop stop-color="#E6E3FD"/>
<stop offset="0.46875" stop-color="#FAF0EC"/>
<stop offset="1" stop-color="#E6E3FD"/>
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
