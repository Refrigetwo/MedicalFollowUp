import React from 'react';
import { Text, View, WebView } from 'react-native';

export default class NewsArt extends React.Component {
    static navigationOptions={
        title: '文章详情',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        const { navigation } = this.props;
        const LINK = navigation.getParam('link', '');
        return (
        <WebView javaScriptEnabled={true} source={{uri:LINK,method: "get"}}>

        </WebView>
        );
    }
}