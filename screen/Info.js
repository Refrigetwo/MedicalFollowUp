import {Echarts, echarts} from 'react-native-secharts';
import React from 'react';
import {Text, View, Image, Dimensions, StyleSheet, FlatList, TouchableHighlight, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
var REQUEST_URL = "http://10.128.199.8:3000/news/query?count=5";

export default class Info extends React.Component {
    render() {
        const option1 = {
            title: {
                text: '血压趋势'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["06-01","06-02","06-03","06-04","06-05","06-06","06-07"]
            },
            yAxis: {},
            series: [{
                name: '高压',
                type: 'line',
                data: [120, 118, 116, 123, 130, 120, 120]
            },{
                name: '低压',
                type: 'line',
                data: [90, 88, 85, 82, 85, 80, 80]
            }
            ]
        };
        return (
            <Echarts option={option} height={400}/>
        );
    }
}