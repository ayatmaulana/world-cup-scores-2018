import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import DetailRoute from '../routes/DetailRoute'


export default class Detail extends React.Component<{}> {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={styles.container}>
          <Text> Hello Info </Text>
        </View>
        <DetailRoute />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK
  },
  header: {backgroundColor: COLOR.BLACK, flex: 1, paddingTop: 50, flexDirection: 'column', alignItems: 'flex-start', position: 'relative'},
  headerTitle: {color: COLOR.PRIMARY, fontSize: DIMEN.HEADER_TITLE, alignSelf: 'center' },
  headerInfoIcon: {alignSelf: 'flex-end', marginRight: 20, marginTop: 0, top: 50, right: 5, position: 'absolute'}
});
