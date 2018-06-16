import Table from '../screens/Table'
import Stats from '../screens/Stats'
import Overview from '../screens/Overview'
import { createBottomTabNavigator } from 'react-navigation';

import * as COLOR from '../styles/colors'


export default createBottomTabNavigator({
        Overview: { screen: Overview },
        Table: {screen: Table},
        Stats: {screen: Stats}
      },{
        // tintColor: COLOR.PRIMARY,
        initialRouteName: "Stats",
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
          activeTintColor: COLOR.BLACK,
          inactiveTintColor: COLOR.GREY_1,
          style: {
            backgroundColor: COLOR.PRIMARY,
            borderTopWidth: 0
          }
        },
      
        // activeTintColor: "orange",
        // activeTintColor
        // shifting: true
      })
      