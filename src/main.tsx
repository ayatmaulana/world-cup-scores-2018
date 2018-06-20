import * as React from 'react';
import Home from './screens/Home'
import Detail from './screens/Detail'
import Info from './screens/Info'

import { View, Text, TouchableHighlight, ScrollView, StyleSheet } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import AppContext from './context'

const StackNavigator = createStackNavigator({
  Home: {screen : Home},
  Detail: {screen: Detail},
  Info: {screen: Info}
},{ 
  headerMode: 'none'
})


export default class Main extends React.Component<{}> {
  render() {
    return (
        <AppContext>
          <StackNavigator /> 
        </AppContext>
        // <DrawerNavigation />
    );
  }
}

