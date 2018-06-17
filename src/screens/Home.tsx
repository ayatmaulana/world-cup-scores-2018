import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import HomeItem from '../components/HomeItem'

export default class Home extends React.Component {

  constructor(props){
    super(props)
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

  render() {
    return (
      <View style={styles.container}>

        <StatusBar backgroundColor={COLOR.BLACK} barStyle="light-content" />

        <View style={styles.header} >
                <Text style={styles.headerTitle}> Schedule </Text>
                <Icon name="info" size={DIMEN.HEADER_TITLE_ICON} color={COLOR.PRIMARY} style={styles.headerInfoIcon} onPress={()=>{this.props.navigation.navigate("Info")}} />
                <IconIonicons style={{alignSelf: 'center', marginTop: 10}} name="ios-football" color={COLOR.PRIMARY} size={100} />
                <Text style={styles.headerTitleSecond}> FIFA 2018 </Text>
        </View>

        <View style={{flex: 2, padding: 30}}>
                <ScrollView showsVerticalScrollIndicator={false} >
                        
                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                           <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                           <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                           <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                           <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                           <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

                        <HomeItem 
                          team={[
                            {name: "Indonesia", code: "ID"},
                            {name: "Jerman", code: "DE"}
                          ]}
                          schedule="Jun 14 2018 - 18:00"
                          group="Group A"
                          onPress={this._onPress.bind(this)}
                        />

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
