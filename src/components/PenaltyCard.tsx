import React from 'react';
import { View } from 'react-native'

export interface Props {
        yellowCard?: boolean
        redCard?: boolean
}

export default class PenaltyCard extends React.Component<Props> {
        super(props: Props){
                super(props)
        }
        
        render(){
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
}
