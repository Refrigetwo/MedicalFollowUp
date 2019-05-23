import React from 'react';
import {Alert, Button, Text, View, StyleSheet, Image, Picker} from 'react-native';
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
        path: 'images',
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
            fPath:'',
            sym:'',
            user:'',
            time:'',
            date:'',
        };
        this.choosePic=this.choosePic.bind(this);
        this.Upload=this.Upload.bind(this);
        this.getTime=this.getTime.bind(this);
        this.getDate=this.getDate.bind(this);
        this.save=this.save.bind(this);
    }

    componentDidMount() {

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

    async Upload(){
        await this.getTime();
        var Time=this.state.time;
        upload(
            Time+'.jpg',
            'image/jpg',
            this.state.fPath)
            .then((resp) => {
                Alert.alert('上传成功');
            })
    }

    async getTime(){
        await storage
            .load({
                key: 'loginState',
            })
            .then(ret => {
                this.setState({ user: ret });
                let date = new Date();
                let h=date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m=date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                let second = date.getSeconds();
                second = second < 10 ? ('0' + second) : second;
                this.setState({
                    time:ret.id + h + m + second
                });
            });
    }

    getDate(){
        let date = new Date();
        let month = date.getMonth() + 1;
        month = month < 10 ? ('0' + month) : month;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return month+d;
    }

    save(){
        if(this.state.user.id!==undefined){
            var request_url='http://10.206.40.5:3000/doc/add?date='+this.getDate()+'&sym='+this.state.sym+'&pic=https://upload-test-refrige.oss-cn-beijing.aliyuncs.com/'+this.state.time+'.jpg&userid='+this.state.user.id;
        }
        fetch(request_url, {
            method: 'GET',
        });
        this.props.navigation.state.params.onGoBack();
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({sym: itemValue})}>
                    <Picker.Item label="检查结果单" value="检查结果单" />
                    <Picker.Item label="X光片" value="X光片" />
                    <Picker.Item label="处方" value="处方" />
                    <Picker.Item label="手术通知单" value="手术通知单" />
                </Picker>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                <Image source={this.state.avatarSource} style={styles.image} />
                <Button title='上传' onPress={this.Upload}/>
                <Button title='保存'
                        onPress={this.save}/>
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
