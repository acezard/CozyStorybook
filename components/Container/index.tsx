import React from 'react'
import { SafeAreaView, View, ViewProps } from 'react-native'

import { styles } from '/components/Container/styles'

type ContainerProps = ViewProps

export const Container = ({
  children,
  style,
  ...props
}: ContainerProps): JSX.Element => {
  const dimensions = { navbarHeight: 48 }

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: dimensions.navbarHeight + 16 },
        style
      ]}
      {...props}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  )
}
