import { StyleSheet } from 'react-native'

import { palette } from '/components/palette'

const statusBarHeight = 24

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.Primary['600'],
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: statusBarHeight + 16
  }
})
