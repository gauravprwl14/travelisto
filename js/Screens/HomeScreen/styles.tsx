import { StyleSheet } from 'react-native'
import * as theme from '../../utils/theme'

const headerStyles = {
    backgroundColor: theme.app.theme.bgColor,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
}

export const StyleModifier = {
    headerStyles,
}

export const StyleCreator = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: theme.app.theme.text.color,
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5,
    },
})
