import React,{ Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import News from './screen/News.js';
import FollowUp from './screen/FollowUp.js';
import Doc from './screen/Doc.js';
import Mine from './screen/Mine.js';
import NewsArt from "./screen/NewsArt";
import SignIn from "./screen/SignIn";
import Mail from './screen/Mail';
import addDoc from './screen/addDoc';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import DateAlarm from './screen/DateAlarm';
import DateList from './screen/DateList';
import newMed from './screen/newMed';
import newSch from './screen/newSch';
import mailList from './screen/mailList';
import newMail from './screen/newMail';
import mailInfo from './screen/mailInfo'

const SERVER='http://10.206.40.5:3000/';
global.SERVER=SERVER;

const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true, // 你可以在构造函数这里就写好sync的方法 // 或是在任何时候，直接对storage.sync进行赋值修改 // 或是写到另一个文件里，这里require引入

});
global.storage = storage;

const USER={
    id:'',
    name:'',
    sex:'',
    account:''
};
global.USER=USER;



const NewsStack= createStackNavigator({
    News:News,
    NewsArt:NewsArt
});

const FollowUpStack= createStackNavigator({
    FollowUp:FollowUp,
    Mail:Mail,
    mailList:mailList,
    newMail:newMail,
    mailInfo:mailInfo
});

const DocStack= createStackNavigator({
    Doc:Doc,
    addDoc:addDoc,
});

const MineStack= createStackNavigator({
    Mine: Mine,
    SignIn: SignIn,
    DateAlarm: DateAlarm,
    DateList: DateList,
    newMed:newMed,
    newSch:newSch,
});

NewsStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

FollowUpStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

DocStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

MineStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

const TabNavigator = createMaterialTopTabNavigator({
    资讯: NewsStack,
    随诊: FollowUpStack,
    档案: DocStack,
    我的: MineStack
}, {swipeEnabled: false,
    tabBarOptions:{
        indicatorStyle:{
            backgroundColor: "white",
        }
    }
});

{/*const app= createStackNavigator({
    home:TabNavigator,
    News:News,
    NewsArt:NewsArt,
    FollowUp:FollowUp,
    Mail:Mail,
    Doc:Doc,
    Mine: Mine,
    SignUp: SignUp,
    SignIn: SignIn
});
*/}
export default createAppContainer(TabNavigator);


