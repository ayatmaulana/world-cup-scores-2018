import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import Icon from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-flags'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import AppContext from '../context/Context'
import services from '../services';
import Spiner from '../components/Spiner';


export default class Stats extends React.Component<{}> {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="bar-chart" size={28} color={tintColor} />)
  }

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Pos','', 'Team', 'P', 'W', 'D', 'L', 'Goals', 'PTS'],
      isLoading: true,
      tableData: [
        ['1', <Flag code="DE" type="flat" size={24} />, 'Jerman', '3', '4', '0', '1', '3 : 0', '4'],
        ['1', <Flag code="ID" type="flat" size={24} />, 'Indonesia', '3', '4', '0', '1', '3 : 0', '4'],
        ['1', <Flag code="MY" type="flat" size={24} />, 'Malasya', '3', '4', '0', '1', '3 : 1', '4'],
        ['1', <Flag code="AU" type="flat" size={24} />, 'Australia', '3', '4', '0', '1', '3 : 3', '4'],
        
      ],
      data: []
    }
  }

  async componentWillMount(){
    let data = await services.groupName(this.props.context.groupActive)
    data = data.countries.map((item, key) => {
      return [
        key+1, <Flag code={item.code} type="flat" size={24} />, item.display_name, item.matches_played,
        item.matches_win, item.matches_draw, item.matches_lost, item.goal_for, item.points
      ]
    })
    this.setState({isLoading: false, tableData: data})
    
  }

  async componentWillUnmount(){
    
  }


  content(){
    const state = this.state;
    return (
        <View style={styles.container}>
        <View style={{marginTop: 5, marginBottom: 20, width: '30%', backgroundColor: COLOR.BLACK, padding: 5, borderTopRightRadius: 30, borderBottomRightRadius: 30, alignItems: 'center'}}>
          <Text style={{color: COLOR.PRIMARY, fontWeight: 'bold'}}>Group Info</Text>
        </View>
        <Table borderStyle={{borderWidth: 0,}} style={{ marginLeft: 5, marginRight: 5}}>
          <Row flexArr={[1,1,5,1,1,1,1,2,1]} data={state.tableHead} style={{  height: 30  }} textStyle={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold', }}/>
          <TableWrapper style={{flexDirection: 'row',}}>
            <Rows flexArr={[1,1,5,1,1,1,1,2,1]} data={state.tableData} style={{  height: 30, alignItems: 'center'  }} textStyle={{ textAlign: 'center', fontSize: 12 }} />
          </TableWrapper>
        </Table>
      </View>
    )
  }

  render() {
    return this.state.isLoading ? (<Spiner show={true} />) : this.content()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});


export default class StatsWithContext extends React.Component<> {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="bar-chart" size={28} color={tintColor} />)
  }

  constructor(props){
    super(props)
  }

  render(){
    return (
      <AppContext.Consumer>
        {context => <Stats {...this.props} context={context} />}
      </AppContext.Consumer>
    )
  }
}