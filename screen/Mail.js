import React from 'react';
import {Text, View, Button, TouchableHighlight} from 'react-native';

export default class Mail extends React.Component {
    state = {

    };

    static navigationOptions={
        title: '消息',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {

    }

    render() {
        return (
            <View style={{alignItems:'center'}}>
                <TouchableHighlight underlayColor={'#999999'} onPress={()=>{this.props.navigation.navigate('mailList' )}}>
                    <Text style={{fontSize:27}}>收件箱</Text>
                </TouchableHighlight>
                <View style={{height:30,backgroundColor:'#b5b5b5'}}/>
                <TouchableHighlight underlayColor={'#999999'} onPress={()=>{this.props.navigation.navigate('newMail' )}}>
                    <Text style={{fontSize:27}}>新邮件</Text>
                </TouchableHighlight>
            </View>
        );
    }
}