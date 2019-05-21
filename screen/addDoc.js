import React from 'react';
import { Text, View } from 'react-native';

export default class addDoc extends React.Component {
    static navigationOptions={
        title: '添加档案',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            </View>
        );
    }
}