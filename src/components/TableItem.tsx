import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import * as COLOR from  '../styles/colors';
import * as DIMEN from  '../styles/dimens';

export interface Props {
        title: string
        scores: [number, number]
        redCard?: boolean
        yellowCard?: boolean
}

export default class TableItem extends React.Component<Props> {

  constructor(props: Props){
          super(props)
  }

  renderCard(){
          var card;
          if (this.props.redCard){
                card = (<View style={{height: 19, width: 14, borderRadius: 3, backgroundColor: 'red'}}  />)
          } else if(this.props.yellowCard) {
                card = (<View style={{height: 19, width: 14, borderRadius: 3, backgroundColor: 'yellow'}}  />)
          } else {
                card = (<View />)
          }

          return card
  }

  render() {
    const props = this.props;
    return (
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", borderBottomColor: COLOR.GREY_1, borderBottomWidth:0.5}}>
              <Text style={{marginLeft: 20}}> { props.scores[0] } </Text>
                <View style={{flex:1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>

                        { this.renderCard() }
                        <Text>  { props.title } </Text>
                </View>
              <Text style={{marginRight: 20}}> { props.scores[1] } </Text>
          </View>
    );
  }
}
