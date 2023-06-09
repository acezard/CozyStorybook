import React from 'react'
import { CommonPathProps, SvgXml } from 'react-native-svg'

export const WarningCircle = (props?: CommonPathProps): JSX.Element => (
  <SvgXml
    {...props}
    xml='&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"&gt;&lt;path fill-rule="evenodd" d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM8 4a1 1 0 00-.993.883L7 5v3a1 1 0 001.993.117L9 8V5a1 1 0 00-1-1z"/&gt;&lt;/svg&gt;
    '
  />
)
