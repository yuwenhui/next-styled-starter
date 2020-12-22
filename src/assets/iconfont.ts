import { createGlobalStyle } from 'styled-components'

export const GlobalIconFont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 2280941 */
    src: url('//at.alicdn.com/t/font_2280941_9tlml98g2e6.eot');
    src: url('//at.alicdn.com/t/font_2280941_9tlml98g2e6.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2280941_9tlml98g2e6.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2280941_9tlml98g2e6.woff') format('woff'),
    url('//at.alicdn.com/t/font_2280941_9tlml98g2e6.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2280941_9tlml98g2e6.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`