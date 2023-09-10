import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7178 1.75H6.28179C5.38663 1.75211 4.52875 2.10872 3.89587 2.74179C3.26299 3.37486 2.90663 4.23284 2.90479 5.128L2.90479 17.456C2.90479 19.031 4.03379 19.696 5.41579 18.935L9.68579 16.564C9.94031 16.4389 10.2202 16.3738 10.5038 16.3738C10.7874 16.3738 11.0673 16.4389 11.3218 16.564L15.5918 18.935C16.9738 19.705 18.1028 19.04 18.1028 17.456V5.128C18.097 4.23267 17.7383 3.37577 17.1045 2.74332C16.4708 2.11087 15.6131 1.75393 14.7178 1.75V1.75Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
