import * as React from 'react'
import { connect } from 'react-redux'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import Container from '../../Components/Container'
import * as commonInterfaces from '../../utils/types/interface'
import * as HomeScreenStyles from './styles'

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`,
})

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
                    <Text style={HomeScreenStyles.StyleCreator.instructions}>
                        To get started, edit HomeScreen.js
                    </Text>
                    <Text style={HomeScreenStyles.StyleCreator.instructions}>
                        {instructions}
                    </Text>
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
