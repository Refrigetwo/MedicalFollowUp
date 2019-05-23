import React from 'react';
import {Text, View, TouchableHighlight, Button, Alert} from 'react-native';
import SignIn from './SignIn.js'

export default class FollowUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            user:'',
            sex:'',
        };
        this.test=this.test.bind(this);
    }
    static navigationOptions={
        header:null,
    };

    test(){
        storage
            .load({
                key: 'loginState',
            })
            .then(ret => {
                this.setState({ user: ret });
            });
        Alert.alert('信息',this.state.user.id);
    };


    render() {
        return (
            <View style={{padding:20, width:100,height:50 }}>
                <TouchableHighlight underlayColor={'#999999'} onPress={()=>{this.props.navigation.navigate('SignIn' )}}>
                    <Text style={{fontSize:27}}>登录</Text>
                </TouchableHighlight>
                <Button title='测试' onPress={this.test}/>
            </View>
        );
    }
}