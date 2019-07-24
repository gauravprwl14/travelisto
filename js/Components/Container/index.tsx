import React, { ReactNode } from 'react'
import { View } from 'react-native'
import ContainerStyles from './styles'
import * as commonInterfaces from '../../utils/types/interface'

interface PropTypes {
    children?: ReactNode;
    style?: commonInterfaces.CommonObject;
}

const Container: React.FC<PropTypes> = (props: PropTypes) => {
    return (
        <View
            style={{
                ...ContainerStyles.container,
                ...props.style,
            }}
        >
            {props.children}
        </View>
    )
}

Container.defaultProps = {
    style: {},
}

export default React.memo(Container)
