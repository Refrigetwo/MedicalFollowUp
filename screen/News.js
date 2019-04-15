import React from 'react';
import { Text, View, Button } from 'react-native';
import NewsArt from './NewsArt.js';

export default class News extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button title='NewsArt' onPress={()=>this.props.navigation.navigate('NewsArt')}/>
            </View>
        );
    }
}