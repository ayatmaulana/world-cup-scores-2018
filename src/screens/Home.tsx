import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import { createDrawerNavigator } from 'react-navigation'

import HomeItem from '../components/HomeItem'
import Spiner from '../components/Spiner'

interface State {
  isLoading: boolean
}

export default class Home extends React.Component<State> {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(() => this.setState({isLoading: false}), 3000)
  }

  _onPress(){
    // console.log(this.props)
    this.props.navigation.navigate("Detail", {
      team: [
        {name: "Indonesia", code: "ID"},
        {name: "Jerman", code: "DE"}
      ]
    })
    // Alert.alert("navigatopm")
  }

  showContent(){
    return this.state.isLoading ? ( <Spiner show={true} /> ) : (
        <HomeItem 
        team={[
          {name: "Indonesia", code: "ID"},
          {name: "Jerman", code: "DE"}
        ]}
        schedule="Jun 14 2018 - 18:00"
        group="Group A"
        onPress={this._onPress.bind(this)}
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

        <View style={{flex: 2, padding: 30}}>
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
