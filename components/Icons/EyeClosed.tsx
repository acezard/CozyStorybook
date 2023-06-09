import React from 'react'
import { CommonPathProps, SvgXml } from 'react-native-svg'

export const EyeClosed = (props?: CommonPathProps): JSX.Element => (
  <SvgXml
    {...props}
    xml='&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"&gt;
    &lt;g fill-rule="evenodd" transform="translate(1 4)"&gt;
      &lt;path d="M0,6 C0,6 3,-4.8985872e-16 9,0 C15,4.89858741e-16 18,6 18,6 C18,6 15,12 9,12 C3,12 0,6 0,6 Z M9,10 C11.2091391,10 13,8.20913911 13,6 C13,3.79086089 11.2091391,2 9,2 C6.79086089,2 5,3.79086089 5,6 C5,8.20913911 6.79086089,10 9,10 Z M9,8 C10.1045696,8 11,7.10456955 11,6 C11,4.89543045 10.1045696,4 9,4 C7.89543045,4 7,4.89543045 7,6 C7,7.10456955 7.89543045,8 9,8 Z"/&gt;
      &lt;path stroke="#FFFFFF" stroke-width="4" d="M2,13 L16,0" stroke-linecap="round" stroke-linejoin="round"/&gt;
      &lt;path transform="translate(-1 -4)" d="M16.32,3.267c0.966,-0.832 2.311,0.514 1.36,1.466l-14,13c-0.992,0.854 -2.31,-0.516 -1.36,-1.466l14,-13Z" style="fill-rule:nonzero;" /&gt;
    &lt;/g&gt;
  &lt;/svg&gt;'
  />
)
