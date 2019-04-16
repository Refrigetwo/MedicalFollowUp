import React from 'react';
import { Text, View, Button } from 'react-native';
import SignUp from './SignUp.js'

export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Mine</Text>
                <Button title='SignUp' onPress={()=>this.props.navigation.navigate('SignUp')}/>
            </View>
        );
    }
}