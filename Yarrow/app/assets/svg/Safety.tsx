import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5677 5.97725C10.6777 5.8764 10.7432 5.73599 10.7496 5.58689C10.7561 5.4378 10.7031 5.29225 10.6022 5.18225C10.5014 5.07225 10.361 5.00682 10.2119 5.00035C10.0628 4.99388 9.91725 5.0469 9.80725 5.14775L5.70475 8.909L4.21 7.415C4.10337 7.31564 3.96233 7.26155 3.81661 7.26412C3.67088 7.26669 3.53184 7.32572 3.42878 7.42878C3.32572 7.53184 3.26669 7.67088 3.26412 7.81661C3.26155 7.96233 3.31564 8.10337 3.415 8.21L5.29 10.085C5.39245 10.1875 5.53051 10.2465 5.67541 10.2498C5.82031 10.253 5.96086 10.2001 6.06775 10.1023L10.5677 5.97725ZM13.1875 2.75C11.1903 2.75 9.244 2.04275 7.3375 0.6125C7.24013 0.539475 7.12171 0.5 7 0.5C6.87829 0.5 6.75987 0.539475 6.6625 0.6125C4.756 2.04275 2.80975 2.75 0.8125 2.75C0.663316 2.75 0.520242 2.80926 0.414752 2.91475C0.309263 3.02024 0.25 3.16332 0.25 3.3125V7.25C0.25 11.0007 2.4685 13.757 6.79375 15.461C6.92629 15.5132 7.07371 15.5132 7.20625 15.461C11.5315 13.757 13.75 11 13.75 7.25V3.3125C13.75 3.16332 13.6907 3.02024 13.5852 2.91475C13.4798 2.80926 13.3367 2.75 13.1875 2.75ZM1.375 3.8585C3.30775 3.7445 5.185 3.041 7 1.7585C8.815 3.041 10.6923 3.7445 12.625 3.8585V7.25C12.625 10.442 10.7852 12.7842 7 14.3315C3.21475 12.7842 1.375 10.442 1.375 7.25V3.8585Z" fill="#8E8E8E"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);