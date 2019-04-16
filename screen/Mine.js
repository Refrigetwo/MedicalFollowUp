import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import SignUp from './SignUp.js'

export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return (
            <View style={{padding:20, width:100,height:50 }}>
                <TouchableHighlight underlayColor={'#999999'} onPress={()=>this.props.navigation.navigate('SignUp')}>
                    <Text style={{fontSize:27}}>注册</Text>
                </TouchableHighlight>

            </View>
        );
    }
}