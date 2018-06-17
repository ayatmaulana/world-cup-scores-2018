import * as React from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import DetailRoute from '../routes/DetailRoute'
import Flag from 'react-native-flags'
import Icon from 'react-native-vector-icons/Ionicons';

// export interface Props {
//   team: [
//           any, any
//   ]
//   schedule?: string
//   group?: string,
// }

export default class Detail extends React.Component<> {
  constructor(props){
    super(props)
  }

  render() {
    const team = this.props.navigation.getParam("team")

    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={styles.container}>

          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: COLOR.BLACK,
            height: 125,
            alignItems: 'center'
          }} >

              <Text style={{color: 'white', marginTop: 10, fontWeight: "bold", fontSize: 20}}> Group D </Text>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 25, paddingRight: 25}}>

                  <Flag size={48} code={team[0].code} type="flat" />

                  <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{color: COLOR.PRIMARY, fontSize: 30}} >0 - 0</Text>
                    <Text style={{color: COLOR.PRIMARY, fontSize: 15}}>(0 - 0)</Text>
                  </View>

                  <Flag size={48} code={team[1].code} type="flat" />

              </View>

          </View>


          <View style={{
            height: 40,
            width: '60%',
            borderRadius: 40/2,
            borderWidth: 2,
            borderColor: COLOR.BLACK,
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'red',
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: COLOR.PRIMARY,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 125 - 40 /2
            
          }}>
            <Text style={{color: COLOR.BLACK, fontSize: 15}}> Indonesia - Malaysa</Text>

          
          </View>

            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', right: 10, bottom: 10, width: 40, height: 40, backgroundColor: COLOR.RED, justifyContent: 'center', borderRadius: 40/2, alignItems: 'center' }}>
                <Icon name="md-close" size={32} color={COLOR.PRIMARY} />
            </TouchableHighlight>
          


          {/* <Text style={{color: 'white', marginTop: 10, fontWeight: "bold", fontSize: 20}}> Group D </Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 15, paddingRight: 15}}>

              <Flag size={64} code={team[0].code} type="flat" />

              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: COLOR.PRIMARY, fontSize: 50}} >0 - 0</Text>
                <Text style={{color: COLOR.PRIMARY, fontSize: 20}}>(0 - 0)</Text>
              </View>

              <Flag size={64} code={team[1].code} type="flat" />

          </View>

  

          <View style={{flex: 1,  backgroundColor: COLOR.PRIMARY, width: '100%', alignItems: 'center', position: 'relative', zIndex: 1}} >

            <View style={{ position: 'absolute', top: -20, alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.PRIMARY, borderColor: COLOR.BLACK, borderWidth: 3, borderRadius: 20, height: 40, zIndex: 9}}>
              <Text style={{color: COLOR.BLACK}}> Argentina - Iceland </Text>
            </View>  

          </View> */}

        </View>
        <View style={{flex: 3}} >
          <DetailRoute />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});
