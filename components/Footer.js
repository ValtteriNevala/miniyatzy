import { Text, View } from 'react-native'
import styles from '../style/style'
import { useFonts } from 'expo-font'

export default function Footer () {

  const [loaded] = useFonts({
    Roboto: require('../assets/Fonts/Roboto-Black.ttf'),
    PlayfairDisplay: require('../assets/Fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
    Shadow: require('../assets/Fonts/ShadowsIntoLight-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.footer}>
      <Text style={styles.author}>
        <Text style={{ fontFamily: 'Roboto' }}>Valtteri Nevala </Text>
      </Text>
    </View>
  )
}
