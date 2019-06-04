import React from 'react';
import {Alert, Button, Text, View, StyleSheet, Image, Picker, TextInput, Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import upload from '../third_party_lib/upload';
import RNFetchBlob from 'react-native-fetch-blob'

export default class mailInfo extends React.Component {
    static navigationOptions={
        title: '邮件详情',
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
    }

    componentDidMount() {

    }

    render(){
        const { navigation } = this.props;
        const DOCTOR = navigation.getParam('doctor', '');
        const CONTENT = navigation.getParam('content','');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>发件人    {DOCTOR}</Text>
                <Text style={styles.info}>内容：</Text>
                <View style={{height:20,backgroundColor:'#b5b5b5'}}/>
                <Text style={styles.title}>{CONTENT}</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    swiper:{
        height:200,
        width:Dimensions.get('window').width,
    },
    Flatcontainer:{
        padding:8,
        flex:1,
        width:Dimensions.get('window').width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFFFFF"
    },
    thumbnail:{
        width:53,
        height:81
    },
    rightContainer:{
        flex:1,
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign: "center",
    },
    info:{
        textAlign: "center",
    },
    list:{
        backgroundColor:"#FFFFFF",
        height:50,
    },
    empty:{
        height:80
    }
});
