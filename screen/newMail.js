import React from 'react';
import {Alert, Button, Text, View, StyleSheet, Image, Picker, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import upload from '../third_party_lib/upload';
import RNFetchBlob from 'react-native-fetch-blob'

export default class newMail extends React.Component {
    static navigationOptions={
        title: '新邮件',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            doctor:'王璐',
            con:''
        };
        this.getDate=this.getDate.bind(this);
        this.save=this.save.bind(this);
    }

    componentDidMount() {

    }

    getDate(){
        let date = new Date();
        let month = date.getMonth() + 1;
        month = month < 10 ? ('0' + month) : month;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return '2019-'+month+'-'+d;
    }

    save(){
        var request_url='http://10.128.199.8:3000/message/add?doctor='+this.state.doctor+'&uid=2'+'&date='+this.getDate()+'&con='+this.state.con+'&flag=0';
        fetch(request_url, {
            method: 'GET',
        });
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({doctor: itemValue})}
                    prompt='选择医生'>
                    <Picker.Item label="王璐" value="王璐" />
                    <Picker.Item label="王嘉豪" value="王嘉豪" />
                    <Picker.Item label="张乐" value="张乐" />
                    <Picker.Item label="李如一" value="李如一" />
                </Picker>
                <TextInput
                    onChangeText={(text) => this.setState({con:text})}
                    placeholder={'邮件内容'}
                    placeholderTextColor={'#6b6e72'}/>
                <Button title='发送'
                        onPress={this.save}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    picker:{
        margin:15,
        height:30,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
    item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
    image:{
        height:198,
        width:300,
        alignSelf:'center',
    },
});
