import { createGlobalStyle } from "styled-components";

import Manrope from "./Manrope.ttf";
import OrchideaProMedium from "./OrchideaProMediumItalic.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Manrope';
        src: local('Manrope');
        url(${Manrope}) format('ttf'),
    }
    @font-face {
        font-family: 'OrchideaProMedium';
        src: local('Orchidea Pro Medium'), local('OrchideaProMedium'),
        url(${OrchideaProMedium}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }
`;
