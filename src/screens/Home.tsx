import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, StatusBar, ListView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';
import Axios from 'axios'

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
      fromNetwork: [],
      refresh: false
    }
  }

  async componentWillMount(){
    await this._fetchData()
  }

  _fetchData = async () => {
    try{
      const getData: any = await Axios("http://fifa.ayatmaulana.com/main")
      
      const data: any = getData.data.data.map(item => {
        return {
          team: [
            {name: item.home_team, code: item.home_code},
            {name: item.away_team, code: item.away_code},
          ],
          schedule: item.datetime,
          group: item.group,
          stadium: item.stadium,
          venue: item.venue
        }
      })
      
      this.setState({isLoading: false, data: DS.cloneWithRows(data)})
    } catch(e) {
      throw new Error(e)
    }
  }

  _onPress = (params: any) => this.props.navigation.navigate("Detail", params)
  _onRefresh = async () => {
    console.log("refreshed")
    await this._fetchData()
    this.setState({refresh: false})
  }

  showContent(){

    return this.state.isLoading ? ( <Spiner show={true} /> ) : (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refresh}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        dataSource={this.state.data}
        showsVerticalScrollIndicator={false}
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
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around',}}>
                  {/* <Icon name="menu" size={DIMEN.HEADER_TITLE_ICON} color={COLOR.PRIMARY} onPress={()=>{this.props.navigation.navigate("Info")}} /> */}
                  <Text style={styles.headerTitle}> Schedule </Text>
                  {/* <Icon name="info" size={DIMEN.HEADER_TITLE_ICON} color={COLOR.PRIMARY} onPress={()=>{this.props.navigation.navigate("Info")}} /> */}
                </View>
               
                <IconIonicons style={{alignSelf: 'center', marginTop: 10}} name="ios-football" color={COLOR.PRIMARY} size={100} />
                <Text style={styles.headerTitleSecond}> FIFA 2018 </Text>
        </View>

        <View style={{flex: 2, padding: 20}}>
                  { this.showContent() }
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
