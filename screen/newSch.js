import React from 'react';
import {
    Alert,
    Button,
    Text,
    View,
    StyleSheet,
    Image,
    Picker,
    TouchableHighlight,
    TimePickerAndroid, TextInput
} from 'react-native';

export default class newSch extends React.Component {
    static navigationOptions={
        title: '添加日程',
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
            minute:'00',
            hour:'00',
            time:'',
            date:'',
            content:'',
            Day:'',
            user_id:'',
            type:'',
        };
        this.save=this.save.bind(this);
        this._onPress1=this._onPress1.bind(this);
    }

    componentDidMount() {
        const { navigation } = this.props;
        const tDay = navigation.getParam('day', '');
        const user_id= navigation.getParam('id','');
        this.setState({
            Day:tDay,
            user_id:user_id
        });
    }

    async save(){
        await storage
            .load({
                key: 'loginState',
            })
            .then(ret => {
                this.setState({ user: ret });
                });
        if(this.state.user.id!==undefined){
            var request_url='http://10.128.199.8:3000/sch/add?type=2&content='+this.state.content+'&time='+this.state.hour+':'+this.state.minute+'&date='+this.state.Day.dateString+'&id='+this.state.user_id;
        }
        fetch(request_url, {
            method: 'GET',
        });
        this.props.navigation.goBack();
    }

    _onPress1(){
        TimePickerAndroid.open()
            .then(({action, hour, minute})=>{
                if(action !== TimePickerAndroid.dismissedAction){
                    this.setState({
                        hour:hour,
                        minute:minute
                    });
                }
            })
    }

    render(){
        return (
            <View>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                    <Picker.Item label="接种疫苗" value="3" />
                    <Picker.Item label="复诊" value="1" />
                    <Picker.Item label="手术通知" value="2" />
                </Picker>
                <TouchableHighlight underlayColor={'#999999'} onPress={this._onPress1}>
                    <Text style={styles.text}>{this.state.hour + ':' + this.state.minute}</Text>
                </TouchableHighlight>
                <TextInput
                    onChangeText={(text) => this.setState({content:text})}
                    placeholder={'提醒内容'}
                    placeholderTextColor={'#6b6e72'}/>
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
