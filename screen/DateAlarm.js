import React from 'react';
import {Text, View, Button, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, RefreshControl, Alert} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
const {width} = Dimensions.get('window');
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default class DateAlarm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            user:'',
            sex:'',
        };
    }
    static navigationOptions={
        header:null,
    };
    static navigationOptions={
        title: '日程',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key:'workout', color: 'green'};
        return (
            <CalendarList
                markedDates={{
                    '2019-06-18': {dots: [vacation, workout] },
                    '2019-05-26': {dots: [massage, workout],}
                }}
                markingType={'multi-dot'}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}

                onDayPress={(day) => {this.props.navigation.navigate('DateList',{
                    day:day
                })}}

            />
        );
    }
}

