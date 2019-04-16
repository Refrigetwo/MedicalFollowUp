import React from 'react';
import { Text, View, Button } from 'react-native';
import News from './News.js';

export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>www</Text>
                <Button title='News' onPress={()=>this.props.navigation.navigate('News')}/>
            </View>
        );
    }
}