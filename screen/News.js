import React from 'react';
import {Text, View, Image, Dimensions, StyleSheet, FlatList, TouchableHighlight, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
var REQUEST_URL = "http://10.0.2.2:3000/news/query?count=5";

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
        this.renderMovie = this.renderMovie.bind(this);
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
                    data:[]
                });
                this.setState({
                    data:this.state.data.concat(responseData),
                    loaded:true,
                });
            });

    }
    renderMovie({item}){
        return(
            <TouchableHighlight underlayColor={'#999999'} onPress={()=>this.props.navigation.navigate('NewsArt',{
                link:item.link
            })}>
                <View style={styles.Flatcontainer}>
                    <Image
                        source={{uri:item.pic}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.info}>{item.info}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    _separator = () => {
        return <View style={{height:2,backgroundColor:'#b5b5b5'}}/>;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper autoplay={true} width={width} showButton={false}>
                        <Image source={require('../images/4.png')}/>
                        <Image source={require('../images/2.png')}/>
                        <Image source={require('../images/3.png')}/>
                    </Swiper>
                </View>
                <View style={{height:555}}>
                    <FlatList
                        ItemSeparatorComponent={this._separator}
                        data={this.state.data}
                        renderItem={this.renderMovie}
                        style={styles.list}
                        keyExtractor={(item, index) => 'key'+index}
                     />
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






