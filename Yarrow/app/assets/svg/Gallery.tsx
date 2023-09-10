import React from 'react';
import {SvgXml} from 'react-native-svg';
import {heightToDp, widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.125 68.75H46.875C62.5 68.75 68.75 62.5 68.75 46.875V28.125C68.75 12.5 62.5 6.25 46.875 6.25H28.125C12.5 6.25 6.25 12.5 6.25 28.125V46.875C6.25 62.5 12.5 68.75 28.125 68.75Z" stroke="#EBEBEB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.125 31.25C31.5768 31.25 34.375 28.4518 34.375 25C34.375 21.5482 31.5768 18.75 28.125 18.75C24.6732 18.75 21.875 21.5482 21.875 25C21.875 28.4518 24.6732 31.25 28.125 31.25Z" stroke="#EBEBEB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.34351 59.2188L23.7498 48.875C26.2185 47.2188 29.781 47.4063 31.9998 49.3125L33.031 50.2188C35.4685 52.3125 39.406 52.3125 41.8435 50.2188L54.8435 39.0625C57.281 36.9687 61.2185 36.9687 63.656 39.0625L68.7498 43.4375" stroke="#EBEBEB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
