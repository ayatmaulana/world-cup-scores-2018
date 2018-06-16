import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as COLOR from '../styles/colors';

import Flag from 'react-native-flags';

export interface Props {
        team: [
                any, any
        ]
        schedule: string
        group: string,
        onPress: any
}

export default class HomeItem extends React.Component<Props> {

        constructor(props: Props){
                super(props)
        }

        render() {
        return (
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={1} >
                <View style={styles.itemWrapper}>
                        <Text style={{marginTop: 5}}> {this.props.schedule} </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <Text style={{color: COLOR.BLACK}} > {this.props.team[0].name} </Text>
                                        <Flag size={32} code={this.props.team[0].code} type="flat" />
                                </View>
                                <View style={{flex:1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-around'  }}>
                                        <Flag size={32} code={this.props.team[1].code} type="flat" />
                                        <Text style={{color: COLOR.BLACK}}> {this.props.team[1].name} </Text>
                                </View>
                        </View>
                        <Text style={{marginBottom: 5}}> { this.props.group } </Text>
                </View>
                </TouchableOpacity>
        );
        }
}

const styles: any = StyleSheet.create({
        itemWrapper: {
                flex: 1,
                height: 90,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
                // padding: 50,
                borderColor: COLOR.GREY_1,
                borderWidth: 0.3,
        }
});
