import React from 'react';
import { Text, View, Button, Image, Dimensions, StyleSheet, TextInput } from 'react-native';
import Mine from './Mine.js'

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        };
    }
    static navigationOptions={
        title: '注册',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    //style={styles.TextInput}
                    onChangeText={(text)=>this.setState({text})}
                    placeholder={'用户名'}
                    placeholderTextColor={'#6b6e72'}
                />
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(text)=>this.setState({text})}
                    placeholder={'密码'}
                    placeholderTextColor={'#6b6e72'}
                />
                <Button title='注册' onPress={()=>this.props.navigation.navigate('Mine',)}/>
            </View>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:30,
        paddingRight:30
    }
});