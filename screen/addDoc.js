import React from 'react';
import {Alert, Button, Text, View, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import upload from '../third_party_lib/upload';
import RNFetchBlob from 'react-native-fetch-blob'

var options = {
    title: '请选择图片来源',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册图片',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};



export default class addDoc extends React.Component {
    static navigationOptions={
        title: '添加档案',
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
            avatarSource: null,
            fPath:''
        };
        this.choosePic=this.choosePic.bind(this);
        this.Upload=this.Upload.bind(this);
    }

    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('用户取消了选择！');
            }
            else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
                RNFetchBlob.fs.stat(this.state.avatarSource.uri)
                    .then((stats) => {this.setState({
                        fPath:'file:/'+stats.path
                    })});

            }
        });
    }

    Upload(){
        upload(
            '0138.jpg',
            'image/jpg',
            this.state.fPath)
            .then((resp) => {
                // your code here
            })
    }

    render(){
        return (
            <View>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                <Image source={this.state.avatarSource} style={styles.image} />
                <Button title='上传' onPress={this.Upload}/>
                <Button title='测试'
                        onPress={ () => {
                            Alert.alert( this.state.fPath);
                        }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
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
