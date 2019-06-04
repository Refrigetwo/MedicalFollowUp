import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TimePickerAndroid,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Mail from './Mail';

export default class FollowUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hour1:'00',
            minute1:'00',
            hour2:'00',
            minute2:'00',
            date:'',
            highpre:120,
            lowpre:90,
            mass:60,
            heart:73,
        };
        this._onPress1=this._onPress1.bind(this);
        this._onPress2=this._onPress2.bind(this);
        this.save=this.save.bind(this);
    };
    static navigationOptions={
        header:null,
    };

    _onPress1(){
        TimePickerAndroid.open()
            .then(({action, hour, minute})=>{
                if(action !== TimePickerAndroid.dismissedAction){
                    this.setState({
                        hour1:hour,
                        minute1:minute
                    });
                }
            })
    }
    _onPress2(){
        TimePickerAndroid.open()
            .then(({action, hour, minute})=>{
                if(action !== TimePickerAndroid.dismissedAction){
                    this.setState({
                        hour2:hour,
                        minute2:minute
                    });
                }
            })
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
        var request_url='http://10.128.199.8:3000/info/add?date=2019-06-07&highpre='+this.state.highpre+'&lowpre='+this.state.lowpre+'&mass='+this.state.mass+'&heart='+this.state.heart+'&sleep0h='+this.state.hour1+'&sleep0m='+this.state.minute1+'&sleep1h='+this.state.hour2+'&sleep1m='+this.state.minute2+'&user_id=2';
        fetch(request_url, {
            method: 'GET',
        });
    }

    render(){
        return (
           <View style={styles.container}>
               <View style={styles.normalcontainer}>
                   <TouchableHighlight underlayColor={'#999999'} onPress={()=>{this.props.navigation.navigate('Info' )}}>
                        <Text style={styles.text}>血压</Text>
                   </TouchableHighlight>
                   <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={{width:70}}
                            onChangeText={(text) => this.setState({highpre:text})}
                            placeholder={'高压'}
                            placeholderTextColor={'#6b6e72'}
                        />

                        <TextInput
                            style={{width:70}}
                            onChangeText={(text) => this.setState({lowpre:text})}
                            placeholder={'低压'}
                            placeholderTextColor={'#6b6e72'}
                        />
                   </View>
               </View>
               <View style={styles.line}/>
               <View style={styles.normalcontainer}>
                   <Text style={styles.text}>心率</Text>
                   <TextInput
                       style={{width:70}}
                       onChangeText={(text) => this.setState({heart:text})}
                       placeholder={'心率'}
                       placeholderTextColor={'#6b6e72'}
                   />
               </View>
               <View style={styles.line}/>
               <View style={styles.normalcontainer}>
                   <Text style={styles.text}>体重</Text>
                   <TextInput
                       style={{width:70}}
                       onChangeText={(text) => this.setState({mass:text})}
                       placeholder={'体重'}
                       placeholderTextColor={'#6b6e72'}
                   />
               </View>
               <View style={styles.line}/>
               <View style={styles.normalcontainer}>
                   <Text style={styles.text}>睡眠时间</Text>
                   <View style={{flexDirection: 'row'}}>
                       <TouchableHighlight underlayColor={'#999999'} onPress={this._onPress1}>
                           <Text style={styles.text}>{this.state.hour1 + ':' + this.state.minute1}</Text>
                       </TouchableHighlight>
                       <Text style={styles.text}>—</Text>
                       <TouchableHighlight underlayColor={'#999999'} onPress={this._onPress2}>
                           <Text style={styles.text}>{this.state.hour2 + ':' + this.state.minute2}</Text>
                       </TouchableHighlight>
                   </View>
               </View>
               <View style={styles.line}/>
               <TouchableOpacity style={styles.floatbutton} onPress={()=>this.props.navigation.navigate('Mail')}>
                   <Icon name="mail"  size={30} color="#01a699" />
               </TouchableOpacity>
               <View style={{height:100,backgroundColor:'#b5b5b5'}}/>
               <Button
                   style={{width:130,height:70}}
                   title='保存'
                   onPress={this.save}
               />
           </View>


        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    bushucontainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    bushu:{
        fontSize: 50,
        color:'#6b6e72'
    },
    num:{
        fontSize: 40,
        color:'#929599'
    },
    target:{
        fontSize: 28,
        color:'#b8bbbf'
    },
    line:{
        width:Dimensions.get('window').width,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    normalcontainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('window').width,
    },
    text:{
        fontSize:27
    },
    floatbutton:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',
        bottom: 30,
        right: 30,
        height:70,
        backgroundColor:'#fff',
        borderRadius:100,
    }
});