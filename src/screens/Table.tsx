import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import TableItem from '../components/TableItem'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppContext from '../context/Context'
import Spiner from '../components/Spiner';



export default class Table extends React.Component<{}> {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  async componentWillMount(){
    
  }

  async componentDidMount(){
    setTimeout(() => this.setState({isLoading: false}), 300)
  }

  async componentWillUnmount(){
    
  }

  content(){
    return (
        <View style={styles.container}>

        <TableItem 
          title="Ball Possesion"
          scores={[1,5]}
        />
        
        
        <TableItem 
          title="Goal Attempts"
          scores={[4,2]}
        />
        
    
    
        <TableItem 
          title="Shots on Goal"
          scores={[1,5]}
        />
        <TableItem 
          title="Shots of Goal"
          scores={[1,5]}
        />
    
        <TableItem 
          title="Goalkeeper saves"
          scores={[1,5]}
        />
    
        <TableItem 
          title="Corner Kick"
          scores={[1,5]}
        />
    
        <TableItem 
          title="Offsides"
          scores={[1,5]}
        />
    
        <TableItem 
          title="Fouls"
          scores={[1,5]}
        />
        
        <TableItem 
          title="Yellow Card"
          scores={[1,5]}
          yellowCard={true}
        />
    
        <TableItem 
          title="Red Card"
          scores={[1,5]}
          redCard={true}
        />
    
      </View>
    );
  }

  render = () => this.state.isLoading ? (<Spiner show={true} />) : this.content()

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    backgroundColor: COLOR.PRIMARY
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});


export default class TableWithContext extends React.Component<> {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="table-large" size={32} color={tintColor} />)
  }

  constructor(props){
    super(props)
  }

  render(){
    return (
      <AppContext.Consumer>
        {context => <Table {...this.props} context={context} />}
      </AppContext.Consumer>
    )
  }
}