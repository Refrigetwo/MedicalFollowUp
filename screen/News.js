import React from 'react';
import { Text, View, Button, Image, Dimensions, StyleSheet, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
var REQUEST_URL = "http://upload-test-refrige.oss-cn-beijing.aliyuncs.com/artical.json"

export default class News extends React.Component {
    static navigationOptions={
        header:null,
    };
    constructor(props){
        super(props);
        this.state = {
            data:[],
            loaded:false,
        };
        this.fetchData = this.fetchData.bind(this);
        //this.state = this.state.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then(response=>response.json())
            .then((responseData)=>{
                this.setState({
                    data:this.state.data.concat(responseData.movies),
                    loaded:true,
                });
            });

    }
    renderMovie({item}){
        return(
            <View style={styles.Flatcontainer}>
                <Image
                    source={{uri:item.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.info}>{item.info}</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper autoplay={true} width={width} showButton={false}>
                        <Image source={require('../images/1.png')}/>
                        <Image source={require('../images/2.png')}/>
                        <Image source={require('../images/3.png')}/>
                    </Swiper>
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderMovie}
                        style={styles.list}
                        keyExtractor={(item, index) => 'key'+index}
                     />
                </View>
                <View style={styles.empty}>
                    <Text>wocao</Text>
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
    Flatcontainer:{
        padding:8,
        flex:1,
        width:Dimensions.get('window').width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFFFFF"
    },
    thumbnail:{
        width:53,
        height:81
    },
    rightContainer:{
        flex:1,
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign: "center",
    },
    info:{
        textAlign: "center",
    },
    list:{
        backgroundColor:"#FFFFFF",
        height:50,
    },
    empty:{
        height:80
    }
});






