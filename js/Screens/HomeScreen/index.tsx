import * as React from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask
} from 'react-native-svg'
import Container from '../../Components/Container'
import * as commonInterfaces from '../../utils/types/interface'
import * as HomeScreenStyles from './styles'

interface HomeScreenProps extends commonInterfaces.CommonNavigationTypes {}

class HomeScreen extends React.Component<HomeScreenProps> {
    public static navigationOptions = {
        headerStyle: HomeScreenStyles.StyleModifier.headerStyles,
    }
    public render() {
        return (
            <Container>
                <StatusBar barStyle='light-content' backgroundColor='#6a51ae' />
                <View>
                    <Text style={HomeScreenStyles.StyleCreator.welcome}>
                        Travelisto
                    </Text>
                </View>
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        { alignItems: 'center', justifyContent: 'center' },
                    ]}
                >
                    <Svg height='50%' width='50%' viewBox='0 0 100 100'>
                        <Circle
                            cx='50'
                            cy='50'
                            r='45'
                            stroke='blue'
                            strokeWidth='2.5'
                            fill='green'
                        />
                        <Rect
                            x='15'
                            y='15'
                            width='70'
                            height='70'
                            stroke='red'
                            strokeWidth='2'
                            fill='yellow'
                        />
                    </Svg>
                </View>
            </Container>
        )
    }
}

export default connect()(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
