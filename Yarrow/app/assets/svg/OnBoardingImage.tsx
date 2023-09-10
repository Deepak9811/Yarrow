import React from 'react';
import {SvgXml} from 'react-native-svg';
import {heightToDp, widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="375" height="352" viewBox="0 0 375 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_16_134" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="375" height="352">
<path d="M0 0H375V324C375 324 268.506 349.796 192 351C112.201 352.256 0 324 0 324V0Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_16_134)">
<circle cx="187" cy="210" r="306" fill="#F8F7F4"/>
<path d="M449.268 114.824L350.655 172.632" stroke="white" stroke-width="8"/>
<path d="M394 394L271.545 345.465L230.739 280.547" stroke="white" stroke-width="8"/>
<path d="M443.268 255.044L230.739 379.161L113 192" stroke="white" stroke-width="8"/>
<path d="M-22 345.156L98 361L453.469 141.128" stroke="white" stroke-width="8"/>
<path d="M49.9901 15.5173L241.836 56.1169L354.051 238.041L479.868 312.852" stroke="white" stroke-width="8"/>
<path d="M-44.6982 255.044L116.824 190.435L161.03 66.3183L317.451 -33.9952" stroke="white" stroke-width="8"/>
<path d="M246.041 8.51038L365.057 195.536" stroke="white" stroke-width="8"/>
<path d="M-60 154.73L-17.4943 142.829L-8.99311 105.424L25.0115 110.524L58.7736 -15.8515" stroke="white" stroke-width="8"/>
<path d="M-25.9952 66.3182L33.5128 74.8194" stroke="white" stroke-width="8"/>
<path d="M135.526 370.659H-20V445.47H276.645L377 404.664L281.746 370.659L220.538 404.664L179.732 341.756L135.526 370.659Z" fill="#F8F7F4"/>
<path d="M346.355 119.025L417.765 78.2197V68.0183L394 -4L339.554 -22.0939L281.746 17.0114L346.355 119.025Z" fill="#F8F7F4"/>
<path d="M-32.7966 275.446L-12.3939 323.053V315L68.3031 281L149 247" stroke="white" stroke-width="8"/>
<path d="M-51 202C-51 202 36.4425 183.051 69 142C96.7079 107.064 79.5407 70.92 103 33C126.833 -5.52451 187 -47 187 -47" stroke="white" stroke-width="35"/>
</g>
<circle cx="188.366" cy="266.57" r="29.9296" fill="#F89808" fill-opacity="0.3" stroke="#F89808"/>
<circle cx="188.366" cy="266.57" r="9.39437" fill="#F89808" stroke="white" stroke-width="2"/>
<g filter="url(#filter0_d_16_134)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M138 198.016C138.006 184.747 143.26 172.024 152.607 162.645C161.954 153.266 174.627 147.998 187.842 148C215.362 148 237.683 170.398 237.683 198.016C237.683 218.604 227.423 234.919 216.428 245.945C211.567 250.847 206.119 255.124 200.21 258.68C197.741 260.143 195.433 261.298 193.424 262.083C191.53 262.837 189.544 263.423 187.842 263.423C186.139 263.423 184.153 262.837 182.259 262.083C179.914 261.124 177.645 259.987 175.473 258.68C169.564 255.124 164.116 250.847 159.256 245.945C148.26 234.919 138 218.604 138 198.016Z" fill="white"/>
</g>
<circle cx="187.7" cy="198.359" r="42.6235" fill="url(#paint0_linear_16_134)"/>
<path d="M192.584 214.06V192.466L169.577 182.173V203.767L192.584 214.06Z" fill="#AF835C"/>
<path d="M187.135 175.715L169.577 182.173L192.584 192.466L210.344 185.806L187.135 175.715Z" fill="#E1C190"/>
<path d="M210.344 207.602L192.584 214.06V192.466L210.344 185.806V207.602Z" fill="#E1C190"/>
<path d="M179.87 178.339L176.641 179.549L200.051 190.044V195.493L202.877 194.282V189.035L179.87 178.339Z" fill="#A87A54"/>
<path d="M202.877 206.795L200.051 208.005V211.342L202.877 210.314V206.795Z" fill="#A87A54"/>
<path d="M204.693 195.493L198.437 197.915V207.602L204.693 205.18V195.493Z" fill="white"/>
<path d="M199.446 199.327L203.684 197.511" stroke="#E1C190" stroke-width="1.5" stroke-linecap="round"/>
<path d="M199.648 200.942L203.886 199.126" stroke="#E1C190" stroke-width="1.5" stroke-linecap="round"/>
<path d="M179.063 212.042L192.584 214.06L169.577 203.767V197.107L157.065 202.153L179.063 212.042Z" fill="#D9D9D9"/>
<defs>
<filter id="filter0_d_16_134" x="98" y="128" width="179.683" height="195.423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="20"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.183333 0 0 0 0 0.183333 0 0 0 0 0.183333 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_134"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_134" result="shape"/>
</filter>
<linearGradient id="paint0_linear_16_134" x1="147.872" y1="182.753" x2="226.131" y2="211.169" gradientUnits="userSpaceOnUse">
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
    height={heightToDp(props.height)}
  />
);
