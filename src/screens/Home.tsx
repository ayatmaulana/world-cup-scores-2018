import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, StatusBar, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';
import Axios from 'axios'

import * as Country from '../lib/country.js'
import Moment from 'moment'

import _ from 'lodash'

import HomeItem from '../components/HomeItem'
import Spiner from '../components/Spiner'

interface State {
  isLoading: boolean,
  data?: any
}

const DS: any = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

export default class Home extends React.Component<State> {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      fromNetwork: []
    }
  }

  async componentWillMount(){
    // setTimeout(() => ), 3000)

    try{
      const getData: any = await Axios("https://fifa-2018-apis.herokuapp.com/fifa/fixtures")
      const countries: any = getData.data.data.group_stages
      for (let i in countries){
        this.setState({fromNetwork: [...this.state.fromNetwork, ...countries[i]]})
      }

      const newData = _.sortBy([ ...this.state.fromNetwork], 'datetime').map(item => {

        if(item.home_team == "England")
          item.home_team = "United Kingdom"

        if(item.away_team == "England")
          item.away_team = "United Kingdom"

        return {
            team: [
              {name: item.home_team, code: Country.getCode(item.home_team)},
              {name: item.away_team, code: Country.getCode(item.away_team)}
            ],
            schedule: Moment(item.datetime).format("MMM D, YYYY - hh:mm A"),
            group: item.group
        }
      })

      this.setState({isLoading: false, data: DS.cloneWithRows(newData)})
    } catch(e) {
      throw new Error(e)
    }

  }

  _onPress = (params: any) => this.props.navigation.navigate("Detail", params)

  showContent(){
    return this.state.isLoading ? ( <Spiner show={true} /> ) : (
      <ListView
        dataSource={this.state.data}
        renderRow={(rowData) => {
          return (
            <HomeItem 
              team={rowData.team}
              schedule={rowData.schedule}
              group={rowData.group}
              onPress={this._onPress.bind(this, rowData)}
            />
          )
        }}
      />

    )  
  }
  
  render() {
    return (
      <View style={styles.container}>

        <StatusBar backgroundColor={COLOR.BLACK} barStyle="light-content" />

        <View style={styles.header} >
                <Text style={styles.headerTitle}> Schedule </Text>
                
                <Icon name="menu" size={DIMEN.HEADER_TITLE_ICON} color={COLOR.PRIMARY} style={{position: 'absolute', top: 15, left: 15}} onPress={()=>{this.props.navigation.navigate("Info")}} />
                <Icon name="info" size={DIMEN.HEADER_TITLE_ICON} color={COLOR.PRIMARY} style={styles.headerInfoIcon} onPress={()=>{this.props.navigation.navigate("Info")}} />
               
                <IconIonicons style={{alignSelf: 'center', marginTop: 10}} name="ios-football" color={COLOR.PRIMARY} size={100} />
                <Text style={styles.headerTitleSecond}> FIFA 2018 </Text>
        </View>

        <View style={{flex: 2, padding: 20}}>
                <ScrollView showsVerticalScrollIndicator={false} >
                  { this.showContent() }
                </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 10, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerTitleSecond: {color: COLOR.PRIMARY, fontSize: 28, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 10, right: 5, position: 'absolute'}
});
