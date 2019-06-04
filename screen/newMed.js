import React from 'react';
import {Alert, Button, Text, View, StyleSheet, Image, Picker, TextInput} from 'react-native';


export default class newMed extends React.Component {
    static navigationOptions={
        title: '添加用药提醒',
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
            medicine:'',
            freq:1,
            ba:1,
            content:'',
            time:'',
            date:'',
            Day:'',
            user_id:''
        };
        this.save=this.save.bind(this);
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

    save(){
        var request_url='http://10.128.199.8:3000/sch/add?type=0&content='+this.state.medicine+this.state.content+'&ba='+this.state.ba+'&fre='+this.state.freq+'&date='+this.state.Day.dateString+'&id='+this.state.user_id;
        fetch(request_url, {
            method: 'GET',
        });
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View>
                <TextInput
                    onChangeText={(text) => this.setState({medicine:text})}
                    placeholder={'药品名称'}
                    placeholderTextColor={'#6b6e72'}/>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({freq: itemValue})}
                    prompt='选择用药频率'>
                    <Picker.Item label="每日一次" value="1" />
                    <Picker.Item label="每日两次" value="2" />
                    <Picker.Item label="每日三次" value="3" />
                </Picker>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({BA: itemValue})}
                    prompt='选择饭前用药/饭后用药'>
                    <Picker.Item label="饭前" value="0" />
                    <Picker.Item label="饭后" value="1" />
                </Picker>
                <TextInput
                    onChangeText={(text) => this.setState({content:text})}
                    placeholder={'每次剂量/片/袋'}
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
