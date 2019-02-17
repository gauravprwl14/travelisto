/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native'
import * as React from 'react'
import App from '../js/App'

// Note: test renderer must be required after react-native.
import reactTestRenderer from 'react-test-renderer'

it('renders correctly', () => {
  reactTestRenderer.create(<App />)
})
