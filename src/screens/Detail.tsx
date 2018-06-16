import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import DetailRoute from '../routes/DetailRoute'
import Flag from 'react-native-flags'

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
          <Text style={{color: 'white', marginTop: 10, fontWeight: "bold", fontSize: 20}}> Group D </Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 15, paddingRight: 15}}>

              <Flag size={64} code={team[0].code} type="flat" />

              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: COLOR.PRIMARY, fontSize: 50}} >0 - 0</Text>
                <Text style={{color: COLOR.PRIMARY, fontSize: 20}}>(0 - 0)</Text>
              </View>

              <Flag size={64} code={team[1].code} type="flat" />

          </View>
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
    backgroundColor: COLOR.BLACK
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});
