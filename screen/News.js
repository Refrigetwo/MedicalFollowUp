import React from 'react';
import { Text, View, Button, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import NewsArt from './NewsArt.js';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

export default class News extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper  width={width} showButton={false}>
                        <Image source={require('../images/1.png')}/>
                        <Image source={require('../images/2.png')}/>
                        <Image source={require('../images/3.png')}/>
                    </Swiper>
                </View>
                <View>
                <ScrollView style={styles.container}>

                </ScrollView>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    swiper:{
        height:200,
        width:Dimensions.get('window').width,

    },

});