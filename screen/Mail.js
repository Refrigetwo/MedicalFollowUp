import React from 'react';
import { Text, View, Button } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

export default class Mail extends React.Component {
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

    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentWillMount() {

    }


    render() {
        return (
            0
        );
    }
}