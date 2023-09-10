import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="75.951" height="116.623" viewBox="0 0 75.951 116.623">
  <g id="Worried-amico" opacity="0.58">
    <g id="freepik--Pictures--inject-360" transform="translate(0 0)">
      <g id="freepik--pictures--inject-360-2" data-name="freepik--pictures--inject-360" transform="translate(0)">
        <g id="freepik--Picture--inject-360" transform="translate(0 13.371)">
          <g id="freepik--Frame--inject-360">
            <path id="Path_23" data-name="Path 23" d="M39.27,128.523l.508.3,10.4-6-.506-.3Z" transform="translate(-38.307 -109.918)" fill="#fafafa"/>
            <path id="Path_24" data-name="Path 24" d="M51.13,92.754l-9.89,5.709V88.1l9.89-5.7Z" transform="translate(-39.769 -80.152)" fill="#fff"/>
            <path id="Path_25" data-name="Path 25" d="M49.84,74.83,37.53,81.937V95.1l12.31-7.107Zm-.957,12.61-10.4,6.016V82.49l10.4-6Z" transform="translate(-37.016 -74.536)" fill="#f0f0f0"/>
            <path id="Path_26" data-name="Path 26" d="M80.066,92.2l-.506-.3V81.547l.506-.3Z" transform="translate(-68.199 -79.299)" fill="#e0e0e0"/>
            <path id="Path_27" data-name="Path 27" d="M48.364,73.984l-.516-.294L35.54,80.8l.514.294Z" transform="translate(-35.54 -73.69)" fill="#fafafa"/>
            <path id="Path_28" data-name="Path 28" d="M35.54,101.23l.514.294v13.159l-.514-.294Z" transform="translate(-35.54 -94.123)" fill="#e0e0e0"/>
          </g>
          <g id="freepik--Land--inject-360" transform="translate(1.856 6.449)">
            <path id="Path_29" data-name="Path 29" d="M51.848,104.523l-9.118,5.262v-2.632l2.281-5.262,1.419,1.316-.511,2.207,3.149-6.733,2.779,3.21Z" transform="translate(-42.73 -98.68)" fill="#f0f0f0"/>
            <path id="Path_30" data-name="Path 30" d="M54.8,101.006a1.487,1.487,0,0,0-.676,1.167c0,.431.3.606.676.39a1.492,1.492,0,0,0,.674-1.167C55.47,100.965,55.168,100.792,54.8,101.006Z" transform="translate(-51.18 -100.338)" fill="#f0f0f0"/>
          </g>
        </g>
        <g id="freepik--picture--inject-360-2" data-name="freepik--picture--inject-360" transform="translate(17.642)">
          <g id="freepik--frame--inject-360-2" data-name="freepik--frame--inject-360">
            <path id="Path_31" data-name="Path 31" d="M107.63,76.713l.508.3,10.4-6-.506-.3Z" transform="translate(-106.667 -58.108)" fill="#fafafa"/>
            <path id="Path_32" data-name="Path 32" d="M119.49,40.944l-9.89,5.709V36.3l9.89-5.706Z" transform="translate(-108.129 -28.342)" fill="#fff"/>
            <path id="Path_33" data-name="Path 33" d="M118.2,23l-12.31,7.107V43.269l12.31-7.107Zm-.957,12.61-10.4,6.008V30.665l10.4-6Z" transform="translate(-105.376 -22.711)" fill="#f0f0f0"/>
            <path id="Path_34" data-name="Path 34" d="M148.426,40.393l-.506-.3V29.737l.506-.3Z" transform="translate(-136.559 -27.489)" fill="#e0e0e0"/>
            <path id="Path_35" data-name="Path 35" d="M116.724,22.174l-.516-.294L103.9,28.987l.514.294Z" transform="translate(-103.9 -21.88)" fill="#fafafa"/>
            <path id="Path_36" data-name="Path 36" d="M103.9,49.42l.514.294V62.876l-.514-.3Z" transform="translate(-103.9 -42.313)" fill="#e0e0e0"/>
          </g>
          <g id="freepik--land--inject-360-2" data-name="freepik--land--inject-360" transform="translate(1.856 6.449)">
            <path id="Path_37" data-name="Path 37" d="M120.21,52.713l-9.12,5.265V55.345l2.281-5.265,1.419,1.316L114.28,53.6l3.149-6.733,2.782,3.21Z" transform="translate(-111.09 -46.87)" fill="#f0f0f0"/>
            <path id="Path_38" data-name="Path 38" d="M123.156,49.2a1.492,1.492,0,0,0-.676,1.172c0,.428.3.6.676.39a1.494,1.494,0,0,0,.674-1.164C123.83,49.155,123.528,48.982,123.156,49.2Z" transform="translate(-119.541 -48.528)" fill="#f0f0f0"/>
          </g>
        </g>
      </g>
    </g>
    <g id="freepik--question-marks--inject-360" transform="translate(50.437 8.826)">
      <g id="freepik--question-marks--inject-360-2" data-name="freepik--question-marks--inject-360" transform="translate(0 0)">
        <path id="Path_39" data-name="Path 39" d="M236.143,56.442a4.736,4.736,0,0,1,1.136.736,3.612,3.612,0,0,1,.813,1,2.854,2.854,0,0,1,.348,1.177,2.549,2.549,0,0,1-.258,1.277,2.629,2.629,0,0,1-.594.846,3.173,3.173,0,0,1-.751.516,4.858,4.858,0,0,1-.828.31l-.8.225a4.2,4.2,0,0,0-.7.258,1.192,1.192,0,0,0-.5.431.56.56,0,0,1-.237.2.328.328,0,0,1-.286,0l-1.009-.467a.416.416,0,0,1-.212-.227.325.325,0,0,1,.018-.3,2.522,2.522,0,0,1,.64-.808,3.433,3.433,0,0,1,.79-.49,5.289,5.289,0,0,1,.844-.294c.286-.072.555-.145.8-.217a3.187,3.187,0,0,0,.653-.258.934.934,0,0,0,.41-.431,1.1,1.1,0,0,0-.041-1.032,2,2,0,0,0-.978-.849,1.937,1.937,0,0,0-2.183.361.774.774,0,0,1-.24.155.369.369,0,0,1-.279-.041l-1.076-.5a.312.312,0,0,1-.168-.175.3.3,0,0,1,0-.258,2.263,2.263,0,0,1,.725-.816,3.525,3.525,0,0,1,1.136-.539,4.4,4.4,0,0,1,1.373-.147A3.83,3.83,0,0,1,236.143,56.442ZM233.2,64.229a.377.377,0,0,1,.2.225.366.366,0,0,1,0,.3l-.539,1.169a.4.4,0,0,1-.516.194L231.2,65.6a.4.4,0,0,1-.191-.516l.539-1.169a.4.4,0,0,1,.516-.191Z" transform="translate(-230.975 -56.078)" fill="#8e8e8e"/>
        <path id="Path_40" data-name="Path 40" d="M240.411,110.562a3.236,3.236,0,0,1,.828.428,2.493,2.493,0,0,1,.625.63,1.985,1.985,0,0,1,.317.774,1.954,1.954,0,0,1-.439,1.518,2.186,2.186,0,0,1-.48.4,3.384,3.384,0,0,1-.55.258l-.537.206a2.782,2.782,0,0,0-.465.23.807.807,0,0,0-.312.328.405.405,0,0,1-.15.152.243.243,0,0,1-.2.015l-.725-.258a.3.3,0,0,1-.16-.142.225.225,0,0,1,0-.206,1.781,1.781,0,0,1,.387-.6,2.492,2.492,0,0,1,.516-.39,3.794,3.794,0,0,1,.563-.258c.191-.07.369-.137.537-.2a2.168,2.168,0,0,0,.431-.222.653.653,0,0,0,.258-.325.774.774,0,0,0-.1-.7,1.37,1.37,0,0,0-.728-.516,1.332,1.332,0,0,0-1.476.392.6.6,0,0,1-.155.124.258.258,0,0,1-.194,0l-.774-.258a.219.219,0,0,1-.129-.111.2.2,0,0,1,0-.173,1.564,1.564,0,0,1,.423-.6,2.42,2.42,0,0,1,.746-.446,2.993,2.993,0,0,1,.934-.194A2.653,2.653,0,0,1,240.411,110.562Zm-1.512,5.546a.273.273,0,0,1,.155.139.258.258,0,0,1,.013.209l-.294.839a.258.258,0,0,1-.139.155.279.279,0,0,1-.209.013l-.818-.289a.272.272,0,0,1-.168-.346l.289-.846a.275.275,0,0,1,.346-.168Z" transform="translate(-235.656 -96.388)" fill="#8e8e8e"/>
        <g id="Group_126" data-name="Group 126" transform="translate(1.628 14.022)" opacity="0.2">
          <path id="Path_41" data-name="Path 41" d="M240.411,110.562a3.236,3.236,0,0,1,.828.428,2.493,2.493,0,0,1,.625.63,1.985,1.985,0,0,1,.317.774,1.954,1.954,0,0,1-.439,1.518,2.186,2.186,0,0,1-.48.4,3.384,3.384,0,0,1-.55.258l-.537.206a2.782,2.782,0,0,0-.465.23.807.807,0,0,0-.312.328.405.405,0,0,1-.15.152.243.243,0,0,1-.2.015l-.725-.258a.3.3,0,0,1-.16-.142.225.225,0,0,1,0-.206,1.781,1.781,0,0,1,.387-.6,2.492,2.492,0,0,1,.516-.39,3.794,3.794,0,0,1,.563-.258c.191-.07.369-.137.537-.2a2.168,2.168,0,0,0,.431-.222.653.653,0,0,0,.258-.325.774.774,0,0,0-.1-.7,1.37,1.37,0,0,0-.728-.516,1.332,1.332,0,0,0-1.476.392.6.6,0,0,1-.155.124.258.258,0,0,1-.194,0l-.774-.258a.219.219,0,0,1-.129-.111.2.2,0,0,1,0-.173,1.564,1.564,0,0,1,.423-.6,2.42,2.42,0,0,1,.746-.446,2.993,2.993,0,0,1,.934-.194A2.653,2.653,0,0,1,240.411,110.562Zm-1.512,5.546a.273.273,0,0,1,.155.139.258.258,0,0,1,.013.209l-.294.839a.258.258,0,0,1-.139.155.279.279,0,0,1-.209.013l-.818-.289a.272.272,0,0,1-.168-.346l.289-.846a.275.275,0,0,1,.346-.168Z" transform="translate(-237.284 -110.41)"/>
        </g>
        <path id="Path_42" data-name="Path 42" d="M277.032,95.374a.312.312,0,0,1,.219.114.307.307,0,0,1,.077.235l-.08,1.048a.3.3,0,0,1-.114.219.31.31,0,0,1-.232.08l-1.032-.08a.323.323,0,0,1-.3-.346l.08-1.05a.312.312,0,0,1,.114-.219A.307.307,0,0,1,276,95.3Zm.039-6.811a3.825,3.825,0,0,1,1.079.237,2.958,2.958,0,0,1,.908.532,2.346,2.346,0,0,1,.6.8,2.065,2.065,0,0,1,.173,1.05,2.129,2.129,0,0,1-.212.818,2.5,2.5,0,0,1-.431.6,3.945,3.945,0,0,1-.545.475l-.555.4a3.376,3.376,0,0,0-.462.4,1,1,0,0,0-.258.472.488.488,0,0,1-.124.219.258.258,0,0,1-.222.077l-.906-.07a.336.336,0,0,1-.227-.111.258.258,0,0,1-.072-.235,2.1,2.1,0,0,1,.258-.8,2.812,2.812,0,0,1,.465-.6,4.175,4.175,0,0,1,.565-.467c.2-.137.382-.258.55-.4a2.631,2.631,0,0,0,.426-.387.774.774,0,0,0,.191-.446.9.9,0,0,0-.325-.774,1.641,1.641,0,0,0-.991-.374,1.586,1.586,0,0,0-1.569.9.7.7,0,0,1-.139.188.322.322,0,0,1-.227.049l-.965-.075a.253.253,0,0,1-.243-.281,1.851,1.851,0,0,1,.32-.834,2.945,2.945,0,0,1,.717-.738,3.556,3.556,0,0,1,1.009-.516,3.128,3.128,0,0,1,1.208-.124Z" transform="translate(-262.759 -80.168)" fill="#8e8e8e"/>
        <g id="Group_127" data-name="Group 127" transform="translate(11.056 8.38)" opacity="0.3">
          <path id="Path_43" data-name="Path 43" d="M277.032,95.374a.312.312,0,0,1,.219.114.307.307,0,0,1,.077.235l-.08,1.048a.3.3,0,0,1-.114.219.31.31,0,0,1-.232.08l-1.032-.08a.323.323,0,0,1-.3-.346l.08-1.05a.312.312,0,0,1,.114-.219A.307.307,0,0,1,276,95.3Zm.039-6.811a3.825,3.825,0,0,1,1.079.237,2.958,2.958,0,0,1,.908.532,2.346,2.346,0,0,1,.6.8,2.065,2.065,0,0,1,.173,1.05,2.129,2.129,0,0,1-.212.818,2.5,2.5,0,0,1-.431.6,3.945,3.945,0,0,1-.545.475l-.555.4a3.376,3.376,0,0,0-.462.4,1,1,0,0,0-.258.472.488.488,0,0,1-.124.219.258.258,0,0,1-.222.077l-.906-.07a.336.336,0,0,1-.227-.111.258.258,0,0,1-.072-.235,2.1,2.1,0,0,1,.258-.8,2.812,2.812,0,0,1,.465-.6,4.175,4.175,0,0,1,.565-.467c.2-.137.382-.258.55-.4a2.631,2.631,0,0,0,.426-.387.774.774,0,0,0,.191-.446.9.9,0,0,0-.325-.774,1.641,1.641,0,0,0-.991-.374,1.586,1.586,0,0,0-1.569.9.7.7,0,0,1-.139.188.322.322,0,0,1-.227.049l-.965-.075a.253.253,0,0,1-.243-.281,1.851,1.851,0,0,1,.32-.834,2.945,2.945,0,0,1,.717-.738,3.556,3.556,0,0,1,1.009-.516,3.128,3.128,0,0,1,1.208-.124Z" transform="translate(-273.815 -88.547)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="freepik--Character--inject-360" transform="translate(4.941 15.329)">
      <g id="freepik--character--inject-360-2" data-name="freepik--character--inject-360" transform="translate(0 0)">
        <path id="Path_44" data-name="Path 44" d="M211.353,295.62h0a4.354,4.354,0,0,1-2.111,4.485l-24.729,12.9-.072,1.427-1.141.637,1.453.836,27.356-15.833Z" transform="translate(-150.107 -240.302)" fill="#8e8e8e"/>
        <path id="Path_45" data-name="Path 45" d="M175.613,162.65,169.29,166.3l26.964,17.049a7.188,7.188,0,0,1,3.241,4.88l3.928,25.426a.439.439,0,0,0,.653.307h0c.147-.083.232-.258.181-.865l-2.245-27.018a6.967,6.967,0,0,0-2.653-4.578Z" transform="translate(-139.713 -141.649)" fill="#8e8e8e"/>
        <path id="Path_46" data-name="Path 46" d="M175.613,162.65,169.29,166.3l26.964,17.049a7.188,7.188,0,0,1,3.241,4.88l3.928,25.426a.439.439,0,0,0,.653.307h0c.147-.083.232-.258.181-.865l-2.245-27.018a6.967,6.967,0,0,0-2.653-4.578Z" transform="translate(-139.713 -141.649)" opacity="0.1"/>
        <path id="Path_47" data-name="Path 47" d="M220.7,301.59a4.263,4.263,0,0,1-2.065,4.387l-23.085,13.34,1.231,2.547,22.3-12.875a2.1,2.1,0,0,1,3.11,1.481Z" transform="translate(-159.196 -244.732)" fill="#8e8e8e"/>
        <path id="Path_48" data-name="Path 48" d="M220.7,301.59a4.263,4.263,0,0,1-2.065,4.387l-23.085,13.34,1.231,2.547,22.3-12.875a2.1,2.1,0,0,1,3.11,1.481Z" transform="translate(-159.196 -244.732)" opacity="0.1"/>
        <path id="Path_49" data-name="Path 49" d="M100.032,312.683l-.312-1.858L76.405,297.371l2.839-1.634-1.414-.816-1.058.612a2.114,2.114,0,0,1-3-2.676l.1-.227-.155.356h0L71.6,297.851l1.835,1.226,1.548-.9Z" transform="translate(-67.235 -238.084)" fill="#8e8e8e"/>
        <path id="Path_50" data-name="Path 50" d="M110.083,265.249,86.247,251.476a3.327,3.327,0,0,1-1.507-2.614v-1.4a3.321,3.321,0,0,1,1.507-2.609l23.836-13.763a3.329,3.329,0,0,1,3.012,0l23.844,13.768a3.327,3.327,0,0,1,1.5,2.609v1.422a3.332,3.332,0,0,1-1.5,2.609L113.1,265.249A3.329,3.329,0,0,1,110.083,265.249Z" transform="translate(-76.983 -192.155)" fill="#455a64"/>
        <path id="Path_51" data-name="Path 51" d="M110.532,306.613a2.43,2.43,0,0,1-.441-.194L86.255,292.649a3.332,3.332,0,0,1-1.5-2.614v-1.406a3.376,3.376,0,0,1,1.221-2.408c-.534.48-.439,1.12.284,1.548l23.723,13.7Z" transform="translate(-76.991 -233.328)" fill="#263238"/>
        <path id="Path_52" data-name="Path 52" d="M210.961,288.618v1.425a3.321,3.321,0,0,1-1.5,2.609l-23.836,13.756a3.355,3.355,0,0,1-2.581.188l-.555-5.162.114.065a3.314,3.314,0,0,0,3.012,0l23.846-13.75c.728-.415.821-1.061.284-1.548A3.368,3.368,0,0,1,210.961,288.618Z" transform="translate(-149.506 -233.314)" fill="#37474f"/>
        <path id="Path_53" data-name="Path 53" d="M119.41,175.043,95.571,188.807a3.12,3.12,0,0,1-1.765.348,1.613,1.613,0,0,1-.258-.028h-.054l-.157-.028h-.021a1.968,1.968,0,0,1-.235-.062,2.243,2.243,0,0,1-.516-.217l-1.234-.72a4.243,4.243,0,0,1-1.807-2.581l-3.613-20.233a2.273,2.273,0,0,1-.031-.377q0-.074,0-.147a2.746,2.746,0,0,1,.165-.741,2.689,2.689,0,0,1,.785-1.133l.1-.077a1.7,1.7,0,0,1,.16-.1l23.836-13.763a3.355,3.355,0,0,1,3.012,0l1.226.71a3.355,3.355,0,0,1,.725.588l.121.134a4.523,4.523,0,0,1,.439.594,1.471,1.471,0,0,1,.085.134l.067.121.093.178c.028.059.057.119.08.178s.041.1.059.15a.417.417,0,0,1,.028.072c.015.044.028.088.041.132s.034.116.046.173a1.255,1.255,0,0,1,.028.126l3.626,20.238a2.645,2.645,0,0,1-1.2,2.57Z" transform="translate(-77.829 -131.215)" fill="#455a64"/>
        <path id="Path_54" data-name="Path 54" d="M102.293,175.182l3.613,20.236a1.137,1.137,0,0,0,1.807.841L131.549,182.5a2.65,2.65,0,0,0,1.2-2.581l-3.626-20.233a1.138,1.138,0,0,0-1.807-.844L103.49,172.6a2.648,2.648,0,0,0-1.2,2.581Z" transform="translate(-89.989 -138.668)" fill="#37474f"/>
        <path id="Path_55" data-name="Path 55" d="M94.957,233.421a3.638,3.638,0,0,1-1.151.1,1.618,1.618,0,0,1-.258-.028c-.08-.013-.139-.021-.212-.036h-.021a1.967,1.967,0,0,1-.235-.062,2.241,2.241,0,0,1-.516-.217l-1.234-.712a4.243,4.243,0,0,1-1.807-2.581l-3.613-20.233a2.273,2.273,0,0,1-.031-.377q0-.074,0-.147a2.746,2.746,0,0,1,.165-.741l4.253,2.416a2.4,2.4,0,0,0-.152,1.29l3.613,20.236a1.124,1.124,0,0,0,1.192,1.048A.175.175,0,0,0,94.957,233.421Z" transform="translate(-77.829 -175.585)" fill="#263238"/>
        <g id="freepik--character--inject-360-3" data-name="freepik--character--inject-360" transform="translate(18.271)">
          <g id="freepik--Bottom--inject-360" transform="translate(0.877 42.865)">
            <path id="Path_56" data-name="Path 56" d="M237.448,348.842s-2.733,5.869-2.97,8.225c-.258,2.454-.883,3.239-.6,5.936.065.588.312,1.77.366,2.248a.7.7,0,0,1-.674.841c-1.079.17-2.756-1.92-3.494-4.145a64.909,64.909,0,0,1-1.742-7.8,3.392,3.392,0,0,1,.421-1.706,5.325,5.325,0,0,1,.534-.87c.405-1.053.674-3.081,1.032-4.475Z" transform="translate(-202.67 -321.362)" fill="#939393"/>
            <path id="Path_57" data-name="Path 57" d="M218.89,382.72a2.517,2.517,0,0,0-.325.792,9.023,9.023,0,0,0,1.388,2.769,3.95,3.95,0,0,1,.666,2.839,6.792,6.792,0,0,0,1.432,4.46,10.86,10.86,0,0,0,5.2,3.771c2.555.932,3.528-.33,3.528-.33s.865-1.213.408-1.747S218.89,382.72,218.89,382.72Z" transform="translate(-195.418 -347.789)" fill="#263238"/>
            <path id="Path_58" data-name="Path 58" d="M222.941,364.435a.463.463,0,0,0-.431.2c-.083.088-.612,1.231-1.032,1.825a8.2,8.2,0,0,0-1.688,2.692c.516,1.951,2.245,3.373,2.429,5.2s.111,3.936,2.792,6.289,5.536,2.725,6.594,2.186,1.019-1.647-.315-3.817c-1.417-2.3-2.212-7.19-2.212-7.193-.15-.852.085-2.263-.728-2.823a3.189,3.189,0,0,0-1.329-.418,2.25,2.25,0,0,0-1.548.126,1.807,1.807,0,0,0-.707,1.161,10.524,10.524,0,0,1-.3,1.363c-.054.139-.145.292-.294.307-.222.021-.328-.258-.359-.485q-.258-1.758-.5-3.518c-.083-.57-.165-1.143-.245-1.714A3.571,3.571,0,0,1,222.941,364.435Z" transform="translate(-196.328 -334.222)" fill="#37474f"/>
            <path id="Path_59" data-name="Path 59" d="M261.636,385.68s1.654,6.885,3.133,9.5a22.331,22.331,0,0,0,4.147,5.789c.416.416,1.352,1.182,1.693,1.52a.7.7,0,0,1,0,1.079c-.733.808-4.057,1.226-6.026-.041s-3.887-4.129-5.084-5.18c-.449-.395-.872-.8-1.29-1.234s-.323-.847-.39-1.339c-.034-.24-.046-.9-.046-.9-.341-1.154-1.164-2.945-1.613-4.062Z" transform="translate(-223.312 -349.985)" fill="silver"/>
            <path id="Path_60" data-name="Path 60" d="M261.37,441.89a2.558,2.558,0,0,0,.145.844,9.17,9.17,0,0,0,2.65,1.608,3.925,3.925,0,0,1,2.065,2.047,6.821,6.821,0,0,0,3.585,3.014,10.8,10.8,0,0,0,6.408.428c2.653-.578,2.813-2.158,2.813-2.158s.088-1.487-.586-1.7S261.37,441.89,261.37,441.89Z" transform="translate(-227.177 -391.689)" fill="#263238"/>
            <path id="Path_61" data-name="Path 61" d="M261.034,419.92c-.07.036-.2.085-.258.4-.021.119.139,1.368.1,2.093a8.126,8.126,0,0,0,0,3.18c1.466,1.381,3.7,1.662,4.821,3.112s2.189,3.272,5.711,3.84,6.137-.637,6.746-1.657-.013-1.936-2.3-3.063c-2.423-1.2-5.693-4.9-5.7-4.916a16.266,16.266,0,0,1-1.244-1.659c-.235-.351-.23-.707-.774-.741a1.951,1.951,0,0,0-.751.15c-.488.17-.968.364-1.435.581a1.047,1.047,0,0,0-.576.475,1.089,1.089,0,0,0,.083.774l.955,2.581a7.492,7.492,0,0,1-2.493-2.506,7.293,7.293,0,0,0-1.409-1.492,3.552,3.552,0,0,0-.834-.475c-.108-.041-.395-.065-.472-.145-.036-.039-.059-.214-.09-.227A2.994,2.994,0,0,1,261.034,419.92Z" transform="translate(-226.679 -375.389)" fill="#37474f"/>
            <path id="Path_62" data-name="Path 62" d="M205.548,249.11c3.007,1.889,13.368,6.922,17.676,10.372,1.244,1,1.845,2.563,1.265,5.564-.805,4.158-3.871,13.056-3.871,13.056a15.353,15.353,0,0,0-.754,2.449L204,264.277Z" transform="translate(-184.613 -248.661)" fill="#8e8e8e"/>
            <path id="Path_63" data-name="Path 63" d="M205.548,249.11c3.007,1.889,13.368,6.922,17.676,10.372,1.244,1,1.845,2.563,1.265,5.564-.805,4.158-3.871,13.056-3.871,13.056a15.353,15.353,0,0,0-.754,2.449L204,264.277Z" transform="translate(-184.613 -248.661)" fill="#fff" opacity="0.4"/>
            <path id="Path_64" data-name="Path 64" d="M220.98,280.578a5.441,5.441,0,0,0-2.483-3.154c-3.848-2.622-9.291-6.426-10.266-7.164a5.946,5.946,0,0,0,.354-4.62s-.289,3.871-2.421,5.466l-.023.039c.542.73,11.26,15.19,15.9,19.614.052-.137.106-.258.16-.382,0,0,.2-.586.516-1.523C222.306,286.436,221.627,283.024,220.98,280.578Z" transform="translate(-186.201 -260.925)" opacity="0.3"/>
            <path id="Path_65" data-name="Path 65" d="M149.991,247.37h0l-21.111,4.9c.606,3.435.906,4.9,2.083,6.782s3.172,3.871,10,7.071c5.141,2.408,11.51,5.043,12.8,5.544.968.379,1.205,2.245,1.863,4.625a33.673,33.673,0,0,0,3.1,6.723c1.636,3.205,2.862,5.845,2.862,5.845s4.478.021,6.849-2.387c-4.488-16.411-4.821-17.591-4.945-17.993-.539-1.773-.56-2.256-2.939-4.075-2.041-1.561-11.077-7.435-11.077-7.435S152.541,252.152,149.991,247.37Z" transform="translate(-128.88 -247.37)" fill="#8e8e8e"/>
            <path id="Path_66" data-name="Path 66" d="M149.991,247.37h0l-21.111,4.9c.606,3.435.906,4.9,2.083,6.782s3.172,3.871,10,7.071c5.141,2.408,11.51,5.043,12.8,5.544.968.379,1.205,2.245,1.863,4.625a33.673,33.673,0,0,0,3.1,6.723c1.636,3.205,2.862,5.845,2.862,5.845s4.478.021,6.849-2.387c-4.488-16.411-4.821-17.591-4.945-17.993-.539-1.773-.56-2.256-2.939-4.075-2.041-1.561-11.077-7.435-11.077-7.435S152.541,252.152,149.991,247.37Z" transform="translate(-128.88 -247.37)" fill="#fff" opacity="0.4"/>
          </g>
          <g id="freepik--Top--inject-360">
            <path id="Path_67" data-name="Path 67" d="M193.67,162.24c3.871.028,5.662,2.405,6.821,5.812s1.768,5.118,2.689,7.781c.976,2.818-4.256,6.271-5.662,5.479l-2.885-7.44C194.369,171.34,193.67,162.24,193.67,162.24Z" transform="translate(-176.072 -141.345)" fill="silver"/>
            <path id="Path_68" data-name="Path 68" d="M192.92,158.58a7.7,7.7,0,0,1,4.589,1.523c.779.717,1.329.934,3.038,6.109,1.234,3.734,1.443,4.591,1.443,4.591a9.153,9.153,0,0,1-7.7,2.921l-.872-2.065Z" transform="translate(-175.516 -138.629)" fill="#263238"/>
            <path id="Path_69" data-name="Path 69" d="M135.516,156.4l-5,1.564s-4.214,3.071-4.645,6.506-.568,5.26-.093,13.665a86.734,86.734,0,0,0,1.758,11.278s4.834,1.425,12.617-1.376c9.079-3.265,9.079-6.736,9.079-6.736a5.835,5.835,0,0,1-1.985-3.871,73.256,73.256,0,0,1,.034-8.287c.258-6.764-.137-10.8-3.925-11.959C143.372,157.186,137.965,156.051,135.516,156.4Z" transform="translate(-125.483 -136.962)" fill="#8e8e8e"/>
            <path id="Path_70" data-name="Path 70" d="M135.516,156.4l-5,1.564s-4.214,3.071-4.645,6.506-.568,5.26-.093,13.665a86.734,86.734,0,0,0,1.758,11.278s4.834,1.425,12.617-1.376c9.079-3.265,9.079-6.736,9.079-6.736a5.835,5.835,0,0,1-1.985-3.871,73.256,73.256,0,0,1,.034-8.287c.258-6.764-.137-10.8-3.925-11.959C143.372,157.186,137.965,156.051,135.516,156.4Z" transform="translate(-125.483 -136.962)" opacity="0.3"/>
            <path id="Path_71" data-name="Path 71" d="M161.158,85.8c-5.12-1.05-9.435,2.323-10.323,5.451-1.386,4.826,3.2,8.553,3.925,11.247l12.473-9.773C167.413,90.745,166.278,86.848,161.158,85.8Z" transform="translate(-144.099 -84.485)" fill="#263238"/>
            <path id="Path_72" data-name="Path 72" d="M157.454,106.962c-1.631-.354-2.018.387-2.114,1.44a15.519,15.519,0,0,1-.258,2.537,1.833,1.833,0,0,1-.258.666.805.805,0,0,1-.588.369c-.32.023-.452-.173-.55-.426a2.453,2.453,0,0,0-.692-1.347,1.647,1.647,0,0,0-2.687.573c-.7,1.592.627,3.543,1.732,4.039a1.844,1.844,0,0,0,2.323-.813l-1.159,5.789c2.524,4,8.331,3,7.177,1.383l1.084-2.627a7.2,7.2,0,0,0,2.186-.041c.978-.188,2.65-.679,3.185-4.047a43.424,43.424,0,0,0,.1-6.671,7.225,7.225,0,0,0-.48-2.431,3.6,3.6,0,0,0-3.871.444A3.455,3.455,0,0,0,157.454,106.962Z" transform="translate(-143.756 -98.86)" fill="silver"/>
            <path id="Path_73" data-name="Path 73" d="M193.945,143.033a1.548,1.548,0,0,0-.828-.452,1.762,1.762,0,0,0-.436-.044.8.8,0,0,0-.444.111.147.147,0,0,0-.046.142c0,.041.036.119.088.121a1.578,1.578,0,0,0,.222-.018h.237a1.612,1.612,0,0,1,.385.044,1.591,1.591,0,0,1,.361.132,3.535,3.535,0,0,1,.346.235.1.1,0,0,0,.157-.039A.222.222,0,0,0,193.945,143.033Z" transform="translate(-174.972 -126.727)" fill="#838383"/>
            <path id="Path_74" data-name="Path 74" d="M174.736,144.529a11,11,0,0,1-3.507-.759c-1.422-.581-2.008-.73-3.229-3.771a6.292,6.292,0,0,0,1.807,4.062c1.319,1.1,4.568,1.357,4.568,1.357Z" transform="translate(-157.027 -124.845)" fill="#939393"/>
            <path id="Path_75" data-name="Path 75" d="M165.939,88.73c-.658-1.838-2.666-3.229-3.827-.516-1.608-2.3-4.387-1.977-4.989.942a10.088,10.088,0,0,0,.186,4.953,3.842,3.842,0,0,1-1.876-3.4,8.837,8.837,0,0,0-.059,2.552s-4.449-.423-5.724-1.776c0,0-1.081-5.033,2.31-6.315.258-2.16,3.541-4.9,9.157-3.523S167.567,86,167.567,86a7.14,7.14,0,0,0-1.752-.875,5.964,5.964,0,0,1,1.807,3.894,5.03,5.03,0,0,1-1.066,3.781A17.3,17.3,0,0,0,165.939,88.73Z" transform="translate(-143.29 -81.276)" fill="#37474f"/>
            <path id="Path_76" data-name="Path 76" d="M153.546,92.634l-1.776-1.329a1.161,1.161,0,0,1,1.595-.222,1.081,1.081,0,0,1,.181,1.551Z" transform="translate(-144.986 -88.388)" fill="#37474f"/>
            <path id="Path_77" data-name="Path 77" d="M153.436,95.057l-2.078.774a1.164,1.164,0,0,1,.676-1.461,1.081,1.081,0,0,1,1.4.686Z" transform="translate(-144.634 -90.943)" fill="#37474f"/>
            <path id="Path_78" data-name="Path 78" d="M169.256,94.824a.093.093,0,0,0,.057-.018.088.088,0,0,0,.013-.121c-1.907-2.387-7-2.614-8.984-1.4a.086.086,0,1,0,.09.147c1.892-1.156,6.935-.921,8.757,1.36a.09.09,0,0,0,.067.031Z" transform="translate(-151.315 -89.651)" fill="#263238"/>
            <path id="Path_79" data-name="Path 79" d="M188.373,125.062a.681.681,0,1,1-.715-.674.692.692,0,0,1,.715.674Z" transform="translate(-171.131 -113.262)" fill="#263238"/>
            <path id="Path_80" data-name="Path 80" d="M207.567,123.682a.671.671,0,0,1-.627.717.635.635,0,0,1-.7-.653.663.663,0,1,1,1.324-.065Z" transform="translate(-185.398 -112.25)" fill="#263238"/>
            <path id="Path_81" data-name="Path 81" d="M198.34,121.43l.3,4.632,2.408-1.017Z" transform="translate(-179.537 -111.067)" fill="#939393"/>
            <path id="Path_82" data-name="Path 82" d="M183.31,116.656l1.332-1.226a.95.95,0,0,1-.059,1.314.883.883,0,0,1-1.272-.088Z" transform="translate(-168.386 -106.616)" fill="#263238"/>
            <path id="Path_83" data-name="Path 83" d="M206.965,114.45l1.438,1.123a.875.875,0,0,1-1.257.183A.957.957,0,0,1,206.965,114.45Z" transform="translate(-185.803 -105.888)" fill="#263238"/>
            <path id="Path_84" data-name="Path 84" d="M162.228,138.542a1.22,1.22,0,0,1,1.092.415s.483-.312.774,0a1.507,1.507,0,0,1,.379.712s.5-.351.841.049a2.3,2.3,0,0,1,.449.862s.446-.17.831.413a3.632,3.632,0,0,0,1.45,1.352c.591.258.3.622-.343.792s-5.742-4.3-5.742-4.3Z" transform="translate(-152.546 -123.745)" fill="#939393"/>
            <path id="Path_85" data-name="Path 85" d="M141.284,213.984c.237.232,5.149-2.281,5.5-5.365C145.485,208.311,141.046,211.367,141.284,213.984Z" transform="translate(-137.199 -175.738)" fill="#263238"/>
            <path id="Path_86" data-name="Path 86" d="M132.006,163.84c-3.812,1.412-4.743,4.483-4.387,7.642.274,2.348,1.724,4.829,4.7,9.7s5.451,3.275,5.451,3.275l.816-3.613L134.3,170.191S134.081,165.515,132.006,163.84Z" transform="translate(-127.015 -142.532)" fill="silver"/>
            <path id="Path_87" data-name="Path 87" d="M154.922,201.869l-.627-1.579s-2.271,4.274-1.2,7.058Z" transform="translate(-145.756 -169.575)" fill="#939393"/>
            <path id="Path_88" data-name="Path 88" d="M131.087,162.65c-3.1,1.094-4.225,2.364-4.7,5.084-.323,1.84-.077,3.161.743,5.706a42.606,42.606,0,0,0,3.063,6.452c.031-1.533,2.965-5.007,5.5-5.365,0,0-1.458-4.421-1.894-5.626S132.419,164.08,131.087,162.65Z" transform="translate(-126.051 -141.649)" fill="#263238"/>
            <path id="Path_89" data-name="Path 89" d="M161.527,148.359a6.274,6.274,0,0,0,.627-2.839c-.194-.865-.614-1.017-.614-1.017a1.29,1.29,0,0,0,.462-.168.529.529,0,0,0,.258-.418c.018-.227-.459-.369-.65-.5a4.8,4.8,0,0,1-1.29-1.311.821.821,0,0,0-.547-.354,1.544,1.544,0,0,0-.578-.955.805.805,0,0,0-.643-.034,1.262,1.262,0,0,0-.532-.7.908.908,0,0,0-.663,0,3.332,3.332,0,0,0-.483-.537,1.006,1.006,0,0,0-1.154.041,2.608,2.608,0,0,0-.813,1.246,7.957,7.957,0,0,0-.441,1.29,10.738,10.738,0,0,0-.258,1.252,1.662,1.662,0,0,0,.028.73A34.876,34.876,0,0,0,157.2,147.5c-.24,1.7-2.155,9.056-2.978,11.575-.774,2.4-.052,6.331,1.087,6.968s2.63.748,4.506-2.021C161.891,160.948,160.474,151.28,161.527,148.359Z" transform="translate(-146.567 -124.372)" fill="silver"/>
            <path id="Path_90" data-name="Path 90" d="M151.511,234.278a5.371,5.371,0,0,0,2.416-2.191c-.41-.09-.828-.157-1.236-.206a12.2,12.2,0,0,1-1.964-.6.1.1,0,0,0-.16.077,1.141,1.141,0,0,0,.147.973,2.277,2.277,0,0,0,.6.537c.072.049.2.1.459.258.111.067.2.147.178.243-.062.3-1.05.294-1.234.294a5.853,5.853,0,0,1-1.776-.3,1.822,1.822,0,0,1-.4-.168,1.547,1.547,0,0,1-.328-.281,5.071,5.071,0,0,1-.379-.434,7.133,7.133,0,0,0-.927-1.115,1.548,1.548,0,0,0-.854-.374v.018C149.036,235.86,151.511,234.278,151.511,234.278Z" transform="translate(-140.742 -192.352)" fill="#939393"/>
            <path id="Path_91" data-name="Path 91" d="M176.557,154.524a2.065,2.065,0,0,1-.8-.013,1.314,1.314,0,0,1-.921-.537s-.041-1.11-.157-1.019-.085.952-.085.952a1.531,1.531,0,0,1-.444-.359c-.235.147.083.405.41.612a4.022,4.022,0,0,0,.6.366,3.082,3.082,0,0,0,1.053.2.743.743,0,0,1,.609.227C176.7,154.792,176.557,154.524,176.557,154.524Z" transform="translate(-161.527 -134.452)" fill="#939393"/>
            <path id="Path_92" data-name="Path 92" d="M170.049,148.424c-.041,0-.083.041-.121.034a1.821,1.821,0,0,0-1.27.395,5.277,5.277,0,0,0-1.148,1.195,2.235,2.235,0,0,1,.774-1.136C168.973,148.292,169.665,148.179,170.049,148.424Z" transform="translate(-156.664 -131.005)" fill="#939393"/>
            <path id="Path_93" data-name="Path 93" d="M165.278,144.52l-.016.129a4.447,4.447,0,0,0-2.323,1.92s.036-.573.952-1.36A3.051,3.051,0,0,1,165.278,144.52Z" transform="translate(-153.273 -128.198)" fill="#939393"/>
            <path id="Path_94" data-name="Path 94" d="M161.33,141.22a2.518,2.518,0,0,0-.911.759,4.857,4.857,0,0,0-.919,1.481,4.927,4.927,0,0,1,2.093-1.995A.475.475,0,0,1,161.33,141.22Z" transform="translate(-150.721 -125.75)" fill="#939393"/>
            <path id="Path_95" data-name="Path 95" d="M163,166.89a4.48,4.48,0,0,0,2.539,1.167,3.675,3.675,0,0,1-1.6-.119Z" transform="translate(-153.318 -144.795)" fill="#939393"/>
            <path id="Path_96" data-name="Path 96" d="M161.628,157.992c.044-1.164.054-2.323.057-3.494s0-2.323.039-3.5a17.15,17.15,0,0,1,.147-1.745,5.785,5.785,0,0,1,.183-.859c.08-.284.191-.552.281-.828a7.85,7.85,0,0,0,.426-1.683,1.833,1.833,0,0,0-.121-.839,1.161,1.161,0,0,0-.488-.653h0a.046.046,0,0,1-.021-.062.062.062,0,0,1,.028-.023,1.089,1.089,0,0,0,.483-.194.534.534,0,0,0,.155-.2.289.289,0,0,0,.018-.225,1.069,1.069,0,0,0-.423-.281,2.6,2.6,0,0,1-.467-.3,4.219,4.219,0,0,1-.774-.787c-.114-.139-.225-.292-.341-.423a.648.648,0,0,0-.428-.24.052.052,0,0,1-.049-.036,2.336,2.336,0,0,0-.379-.79.658.658,0,0,0-.359-.2.818.818,0,0,0-.415.034.057.057,0,0,1-.072-.036h0a1.239,1.239,0,0,0-.413-.617.774.774,0,0,0-.7-.049.065.065,0,0,1-.067-.018,2.178,2.178,0,0,0-.576-.594.937.937,0,0,0-.774,0,1.383,1.383,0,0,0-.627.532,5.209,5.209,0,0,0-.374.761,8.663,8.663,0,0,0-.516,1.618c-.065.276-.121.557-.163.839a2.871,2.871,0,0,0-.041.421,1.006,1.006,0,0,0,.044.4h0a2.443,2.443,0,0,0,.3.459c.116.147.237.294.359.436.243.289.493.57.746.852q.759.839,1.548,1.662a.023.023,0,0,1,0,.026c-.083.547-.206,1.087-.33,1.623s-.258,1.074-.395,1.608L156.3,153.8l.79-3.216.377-1.613c.121-.537.243-1.076.323-1.621v.028c-.516-.547-1.032-1.1-1.548-1.657-.258-.279-.516-.563-.751-.849-.124-.145-.245-.289-.361-.439a2.508,2.508,0,0,1-.32-.48h0a.984.984,0,0,1-.059-.441,3.93,3.93,0,0,1,.041-.431c.041-.284.1-.565.16-.847a8.9,8.9,0,0,1,.529-1.636,5.676,5.676,0,0,1,.379-.774,1.479,1.479,0,0,1,.653-.578,1.048,1.048,0,0,1,.875,0,1.229,1.229,0,0,1,.341.286,3.785,3.785,0,0,1,.274.336l-.064-.018a1.032,1.032,0,0,1,.41-.07.748.748,0,0,1,.4.126,1,1,0,0,1,.281.307,1.616,1.616,0,0,1,.176.369l-.072-.036a.952.952,0,0,1,.475-.036.774.774,0,0,1,.418.232,2.4,2.4,0,0,1,.4.831l-.049-.039a.774.774,0,0,1,.5.276c.126.145.23.289.343.431a4.216,4.216,0,0,0,.756.774,2.518,2.518,0,0,0,.446.294c.083.039.165.08.258.126a.593.593,0,0,1,.219.2.5.5,0,0,1-.2.537,1.233,1.233,0,0,1-.516.212V144.3a1.226,1.226,0,0,1,.542.707,2.464,2.464,0,0,1,.114.431,1.99,1.99,0,0,1,0,.446,7.839,7.839,0,0,1-.436,1.7c-.09.276-.2.547-.284.823a5.92,5.92,0,0,0-.183.849c-.085.576-.124,1.156-.152,1.737-.046,1.164-.049,2.323-.065,3.5S161.684,156.828,161.628,157.992Z" transform="translate(-147.192 -124.213)" fill="#939393"/>
            <path id="Path_97" data-name="Path 97" d="M157.082,224.034a28.343,28.343,0,0,1-2.9,1.252,12,12,0,0,1-3.453.356,15.974,15.974,0,0,1-1.825-.129,5.84,5.84,0,0,1-1.745-.7,2.478,2.478,0,0,1-1.4-1.2,4.977,4.977,0,0,0-.274-.945c-.106-.173-.271-.3-.39-.462a2.064,2.064,0,0,1-.289-.929,5.456,5.456,0,0,0-.258-1.032,17.814,17.814,0,0,0-.911-2.16.108.108,0,0,1-.018-.08.119.119,0,0,1,.067-.059,1.329,1.329,0,0,1,1.345.3,7.036,7.036,0,0,1,.926,1.117q.178.225.379.434a1.616,1.616,0,0,0,.328.279,1.753,1.753,0,0,0,.4.168,5.95,5.95,0,0,0,1.776.3c.183,0,1.172,0,1.236-.294.021-.1-.07-.178-.181-.243-.258-.152-.387-.206-.457-.258a2.214,2.214,0,0,1-.6-.539,1.141,1.141,0,0,1-.147-.973.145.145,0,0,1,.049-.077.139.139,0,0,1,.111,0,11.485,11.485,0,0,0,1.964.6,10.528,10.528,0,0,1,2.021.418,14.308,14.308,0,0,0,1.381.477,2.1,2.1,0,0,0,1.618-.276c1.141-.63,3.644-2.638,4.981-3.587l5.056-2.976s.351,1.032.7,2.269c.668,2.377.591,2.839-.47,3.851A28.71,28.71,0,0,1,157.082,224.034Z" transform="translate(-138.942 -178.871)" fill="silver"/>
            <path id="Path_98" data-name="Path 98" d="M143.84,232.467a1.156,1.156,0,0,1,.885,0,1.977,1.977,0,0,1,.738.516c.206.224.379.475.56.715.088.121.188.232.289.346a4.127,4.127,0,0,0,.3.33,1.639,1.639,0,0,0,.774.385,6.412,6.412,0,0,0,.877.191,4.939,4.939,0,0,0,.9.049,2.736,2.736,0,0,0,.867-.134c.137-.057.183-.16.062-.258a2.789,2.789,0,0,0-.387-.225,2.427,2.427,0,0,1-.379-.258,1.776,1.776,0,0,1-.333-.32,1.19,1.19,0,0,1-.24-.885.955.955,0,0,1,.057-.232.129.129,0,0,1,.129-.08.471.471,0,0,1,.119.028c.145.046.286.1.428.15.284.106.565.217.852.3a4.824,4.824,0,0,0,.88.173,9.782,9.782,0,0,1,1.763.416,9.616,9.616,0,0,0-1.77-.359,5.077,5.077,0,0,1-.893-.165c-.292-.088-.573-.2-.857-.3-.142-.052-.284-.1-.428-.142a.324.324,0,0,0-.1-.026c-.026,0-.034,0-.049.034a1.007,1.007,0,0,0-.046.206,1.089,1.089,0,0,0,.23.816,1.782,1.782,0,0,0,.32.3,2.289,2.289,0,0,0,.377.243,4.514,4.514,0,0,1,.395.227.346.346,0,0,1,.09.1.188.188,0,0,1,.018.15.3.3,0,0,1-.191.186,2.66,2.66,0,0,1-.914.134,5.1,5.1,0,0,1-.908-.057,6.813,6.813,0,0,1-.888-.2,3.453,3.453,0,0,1-.434-.15,1.231,1.231,0,0,1-.382-.258c-.111-.106-.2-.225-.3-.338a4.175,4.175,0,0,1-.286-.354c-.181-.243-.351-.49-.55-.715a1.933,1.933,0,0,0-.707-.539A1.143,1.143,0,0,0,143.84,232.467Z" transform="translate(-139.102 -193.382)" fill="#a7a7a7"/>
            <path id="Path_99" data-name="Path 99" d="M209.55,220.7a5.579,5.579,0,0,1,4.129-1.017c-.774-.828-3.151-.323-4.129.212Z" transform="translate(-187.854 -183.636)" fill="#939393"/>
          </g>
        </g>
        <path id="Path_100" data-name="Path 100" d="M86.881,282.736a1.739,1.739,0,0,1-2.581,1.791L62.08,271.7a3.187,3.187,0,0,1-1.548-3.314l4.725-11.164H62.418l-7.706,22.156a.542.542,0,0,0,.774.645.552.552,0,0,0,.227-.258l2.1-4.973a2.532,2.532,0,0,1,3.143-.483l24.7,14.264a6.122,6.122,0,0,1,2.934,4.235Z" transform="translate(-54.685 -211.813)" fill="#8e8e8e"/>
        <path id="Path_101" data-name="Path 101" d="M86.881,282.736a1.739,1.739,0,0,1-2.581,1.791L62.08,271.7a3.187,3.187,0,0,1-1.548-3.314l4.725-11.164H62.418l-7.706,22.156a.542.542,0,0,0,.774.645.552.552,0,0,0,.227-.258l2.1-4.973a2.532,2.532,0,0,1,3.143-.483l24.7,14.264a6.122,6.122,0,0,1,2.934,4.235Z" transform="translate(-54.685 -211.813)" fill="#fff" opacity="0.2"/>
        <path id="Path_102" data-name="Path 102" d="M109.111,261.8a1.1,1.1,0,0,1-1.729-.9h0l-.119-1.226.034.364-1.087-11.27a7.185,7.185,0,0,0-2.689-5.027L81.752,226.442l-.431-2.392a6.008,6.008,0,0,0,.516,9.781l18.582,11.74a7.182,7.182,0,0,1,3.244,4.88l4.261,25.15a.44.44,0,1,0,.872-.108l-.617-6.4a4.86,4.86,0,0,1,2.168-4.764" transform="translate(-72.759 -187.203)" fill="#8e8e8e"/>
        <path id="Path_103" data-name="Path 103" d="M109.111,261.8a1.1,1.1,0,0,1-1.729-.9h0l-.119-1.226.034.364-1.087-11.27a7.185,7.185,0,0,0-2.689-5.027L81.752,226.442l-.431-2.392a6.008,6.008,0,0,0,.516,9.781l18.582,11.74a7.182,7.182,0,0,1,3.244,4.88l4.261,25.15a.44.44,0,1,0,.872-.108l-.617-6.4a4.86,4.86,0,0,1,2.168-4.764" transform="translate(-72.759 -187.203)" opacity="0.1"/>
      </g>
    </g>
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
