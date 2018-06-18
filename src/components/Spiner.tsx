import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

import Spinner from 'react-native-spinkit';

export interface Props {
        show: boolean
}

export default class Spiner extends React.Component<Props> {

  constructor(props: Props){
          super(props)
  }

  render() {
    const props = this.props;
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY}}>
                 <Spinner isVisible={true} size={80} type='ThreeBounce' color={COLOR.BLACK} />
        </View>
    );
  }
}
