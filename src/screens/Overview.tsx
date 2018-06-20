import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'

import PenaltyCard from '../components/PenaltyCard'
import Spiner from '../components/Spiner'

import AppContext from '../context/Context'


interface State {
  isLoading: boolean
}

export default class Overview extends React.Component<State> {


  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount(){
    await this.setState({isLoading: false})
  }

  content() {

    const { schedule, venue, stadium } = this.props.context.matchActive

    return (
      <View style={styles.container}>
        <View style={{marginTop: 5, marginBottom: 20, width: '30%', backgroundColor: COLOR.BLACK, padding: 5, borderTopRightRadius: 30, borderBottomRightRadius: 30, alignItems: 'center'}}>
          <Text style={{color: COLOR.PRIMARY, fontWeight: 'bold'}}>Match Info</Text>
        </View>
        
        <View style={{flex: 3}}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: "flex-start"}}>
              <IconEntypo name="calendar" size={24} color={COLOR.BLACK} style={{marginRight: 20, marginLeft: 20}} />
              <View>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}> { schedule } </Text>
                  <Text style={{fontSize: 12}}>Start Date</Text>
              </View>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex:1, flexDirection: 'row', justifyContent: "flex-start"}}>
                <Icon name="balance-scale" size={24} color={COLOR.BLACK} style={{marginRight: 20, marginLeft: 15}} />
                <View>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Felix Byrich</Text>
                    <Text style={{fontSize: 12}}>Referee</Text>
                </View>
              </View>

              <View style={{flex:1, flexDirection: 'row', justifyContent: "flex-start"}}>
                <IconEntypo name="database" size={24} color={COLOR.BLACK} style={{marginRight: 20, marginLeft: 20}} />
                <View>
                    <View style={{height: 30, width: '100%'}}>
                      <View style={{borderColor: 'red', flexDirection: 'row', justifyContent: 'space-around'}}>
                          {/* <View style={{flex:6, flexDirection: 'row', justifyContent: 'flex-start'}}> */}
                            <PenaltyCard yellowCard={true} />
                            <Text style={{marginLeft: 5, marginRight: 5, fontSize: 12, fontWeight: 'bold'}}>0.0</Text>
                            <PenaltyCard redCard={true} />
                            <Text style={{marginLeft: 5, fontSize: 12, fontWeight: 'bold'}}>0.0</Text>
                          {/* </View> */}
                      </View>
                    </View>
                    <Text style={{marginTop: -7, fontSize: 12}}>Avg Card</Text>
                </View>
              </View>

            </View>

            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex:1, flexDirection: 'row', justifyContent: "flex-start"}}>
                <Icon name="bank" size={24} color={COLOR.BLACK} style={{marginRight: 20, marginLeft: 15}} />
                <View>
                    <Text style={{fontSize: 12, fontWeight: 'bold', width: 120, flexWrap: 'wrap'}}>{stadium}</Text>
                    <Text style={{fontSize: 12}}>Stadium</Text>
                </View>
              </View>

              <View style={{flex:1, flexDirection: 'row', justifyContent: "flex-start"}}>
                <IconMaterial name="sofa" size={24} color={COLOR.BLACK} style={{marginRight: 20, marginLeft: 20}} />
                <View>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>45360</Text>
                    <Text style={{fontSize: 12}}>Capacity</Text>
                </View>
              </View>

            </View>

            <View style={{flex:1, flexDirection: 'row', justifyContent: "flex-start"}}>
              <IconOcticons name="location" size={24} color={COLOR.BLACK} style={{marginRight: 20, marginLeft: 20}} />
              <View>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>{ venue }</Text>
                  <Text style={{fontSize: 12}}>Location</Text>
              </View>
            </View>
        </View>

        <View style={{width: '30%', backgroundColor: COLOR.BLACK, padding: 5, borderTopRightRadius: 30, borderBottomRightRadius: 30, alignItems: 'center'}}>
          <Text style={{color: COLOR.PRIMARY, fontWeight: 'bold'}}>Votes</Text>
        </View>
        
        <View style={{flex:1, flexDirection: 'column'}} >
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', alignContent: 'center'}}>
            <Text style={{color: COLOR.GREEN}}> 19960 </Text>
            <Text style={{color: COLOR.YELLOW}}> 2443 </Text>
            <Text style={{color: COLOR.BLUE}}> 1948 </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, marginRight: 15, justifyContent: 'flex-start', }}>
            <View style={{backgroundColor: COLOR.GREEN, height: 10, width: "70%", borderTopLeftRadius: 30, borderBottomLeftRadius: 30}} />
            <View style={{backgroundColor: COLOR.YELLOW, height: 10, width: "10%"}} />
            <View style={{backgroundColor: COLOR.BLUE, height: 10, width: "20%", borderTopRightRadius: 30, borderBottomRightRadius: 30}} />
          </View>
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: -30, alignContent: 'center'}}>
            <Text style={{color: COLOR.GREEN}}> 60% </Text>
            <Text style={{color: COLOR.YELLOW}}> 15% </Text>
            <Text style={{color: COLOR.BLUE}}> 25% </Text>
          </View>
        </View>
      </View>
    );
  }

  render(){
    return this.state.isLoading ? (< Spiner show={true} />) : this.content()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});


export default class OverviewWithContext extends React.Component<> {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="list-ul" size={28} color={tintColor} />),
  }

  constructor(props){
    super(props)
  }

  render(){
    return (
      <AppContext.Consumer>
        {context => <Overview {...this.props} context={context} />}
      </AppContext.Consumer>
    )
  }
}