import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import News from './screen/News.js';
import FollowUp from './screen/FollowUp.js';
import Doc from './screen/Doc.js';
import Mine from './screen/Mine.js';
import NewsArt from "./screen/NewsArt";

export const NewsStack= createStackNavigator({
    News:News,
    NewsArt:NewsArt
});

const FollowUpStack= createStackNavigator({
    FollowUp:FollowUp,
});

const DocStack= createStackNavigator({
    Doc:Doc,
});

const MineStack= createStackNavigator(({
    Mine: Mine,
}));

const TabNavigator = createMaterialTopTabNavigator({
    资讯: NewsStack,
    随诊: FollowUpStack,
    档案: DocStack,
    我的: MineStack
}, {tabBarOptions:{
            indicatorStyle:{
                backgroundColor: "white",
            }
        }

});

export default createAppContainer(TabNavigator);


