import React,{ Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import News from './screen/News.js';
import FollowUp from './screen/FollowUp.js';
import Doc from './screen/Doc.js';
import Mine from './screen/Mine.js';
import NewsArt from "./screen/NewsArt";
import SignUp from "./screen/SignUp";
import SignIn from "./screen/SignIn";

const NewsStack= createStackNavigator({
    News:News,
    NewsArt:NewsArt
});

const FollowUpStack= createStackNavigator({
    FollowUp:FollowUp,
});

const DocStack= createStackNavigator({
    Doc:Doc,
});

const MineStack= createStackNavigator({
    Mine: Mine,
    SignUp: SignUp,
    SignIn: SignIn
});

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
}, {swipeEnabled: true,
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
    Doc:Doc,
    Mine: Mine,
    SignUp: SignUp,
    SignIn: SignIn
});
*/}
export default createAppContainer(TabNavigator);


