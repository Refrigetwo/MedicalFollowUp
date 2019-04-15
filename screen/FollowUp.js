import React from 'react';
import { Text, View } from 'react-native';

export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>FollowUp</Text>
            </View>
        );
    }
}