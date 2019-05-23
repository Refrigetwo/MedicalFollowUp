import React from 'react';
import {Text, View, Button, Image, Dimensions, StyleSheet, TextInput, Alert} from 'react-native';
import Mine from './Mine.js'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            pass:''
        };
        this.onPress = this.onPress.bind(this);
    }

    static navigationOptions = {
        title: '注册',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    onPress () {
        var request_url='http://10.0.2.2:3000/users/addUser?id=7&name=李'+this.state.account+'&sex=1&account='+this.state.account+'&pass='+this.state.pass;
        fetch(request_url, {
            method: 'GET',
        });
    };

    render()
    {
        return (
            <View style={styles.container}>
                <TextInput
                    //style={styles.TextInput}
                    onChangeText={(text) => this.setState({account:text})}
                    placeholder={'用户名'}
                    placeholderTextColor={'#6b6e72'}
                />
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => this.setState({pass:text})}
                    placeholder={'密码'}
                    placeholderTextColor={'#6b6e72'}
                    secureTextEntry={true}
                />
                <Button title='测试'
                        onPress={ () => {
                            Alert.alert('输入的内容为account:' + this.state.account+'pass:'+this.state.pass);
                        }}/>

                <Button title='注册' onPress={this.onPress}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30
    }
});