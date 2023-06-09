import React from 'react'
import { CommonPathProps, SvgXml } from 'react-native-svg'

export const Eye = (props?: CommonPathProps): JSX.Element => (
  <SvgXml
    {...props}
    xml='&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"&gt;
    &lt;path fill-rule="evenodd" d="M21,10 C21,10 24,4 30,4 C36,4 39,10 39,10 C39,10 36,16 30,16 C24,16 21,10 21,10 Z M30,14 C32.2091391,14 34,12.2091391 34,10 C34,7.79086089 32.2091391,6 30,6 C27.7908609,6 26,7.79086089 26,10 C26,12.2091391 27.7908609,14 30,14 Z M30,12 C31.1045696,12 32,11.1045696 32,10 C32,8.89543045 31.1045696,8 30,8 C28.8954304,8 28,8.89543045 28,10 C28,11.1045696 28.8954304,12 30,12 Z" transform="translate(-20)"/&gt;
  &lt;/svg&gt;
  '
  />
)
