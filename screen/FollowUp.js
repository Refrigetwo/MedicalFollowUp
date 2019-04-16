import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';

export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };

    render() {
        return (
           <View style={styles.container}>
               <View style={styles.bushucontainer}>
                   <Text style={styles.bushu}>步数</Text>
                   <Text style={styles.num}>2500</Text>
                   <Text style={styles.target}>目标：10000</Text>
               </View>
               <View style={styles.line}/>
               <View style={styles.normalcontainer}>
                   <Text style={styles.text}>心率</Text>
                   <Text style={styles.text}>100</Text>
               </View>
               <View style={styles.line}/>
               <View style={styles.normalcontainer}>
                   <Text style={styles.text}>体重</Text>
                   <Text style={styles.text}>100</Text>
               </View>
               <View style={styles.line}/>
               <View style={styles.normalcontainer}>
                   <Text style={styles.text}>睡眠时间</Text>
                   <Text style={styles.text}>100</Text>
               </View>
               <View style={styles.line}/>
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
    }
});