import React from 'react';
import {Text, View, Button, Image, Dimensions, StyleSheet, TextInput, Alert} from 'react-native';
import Mine from "./Mine";
import md5 from 'crypto-js/md5';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            pass:''
        };
        this.onPress = this.onPress.bind(this);
    }

    static navigationOptions = {
        title: '登录',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    onPress () {
        var request_url='http://10.0.2.2:3000/users/query?account='+this.state.account;
        fetch(request_url,{
            method: 'GET',
        })
            .then(response=>response.json())
            .then((responseData)=>{
                if(responseData.pass==this.state.pass){
                    global.USER={
                        name:responseData.name,
                        sex:responseData.sex.toString(),
                        account:responseData.account,
                        id:responseData.id.toString()
                    };
                    storage.save({
                        key: 'loginState', // 注意:请不要在key中使用_下划线符号!
                        data: {
                            name:responseData.name,
                            sex:responseData.sex.toString(),
                            account:responseData.account,
                            id:responseData.id.toString()
                        },

                        // 如果不指定过期时间，则会使用defaultExpires参数
                        // 如果设为null，则永不过期
                        expires: null,
                    });
                    this.props.navigation.goBack();
                }
                else{
                    Alert.alert('登陆失败','用户名或密码错误')
                }
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
                    onChangeText={(text) => this.setState({pass:md5(text)})}
                    placeholder={'密码'}
                    placeholderTextColor={'#6b6e72'}
                    secureTextEntry={true}
                />
                <Button title='登录' onPress={this.onPress}/>
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