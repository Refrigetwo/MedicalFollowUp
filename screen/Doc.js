import React from 'react';
import {Text, View, Button, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, RefreshControl} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
const {width} = Dimensions.get('window');


export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };
    constructor(props){
        super(props);
        this.state = {
            name:'121',
            sex:'212',
            data:[],
            user:'',
            loaded:false,
            refreshing: false,
        };
        this.fetchData = this.fetchData.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        //this.state = this.state.bind(this);
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    };

    async componentDidMount() {
        await storage
            .load({
                key: 'loginState',
            })
            .then(ret => {
                this.setState({
                    name: ret.name,
                    sex: ret.sex
                });
            });
        this.fetchData();
    }
    async fetchData(){
        await storage
            .load({
                key: 'loginState',
            })
            .then(ret => {
                this.setState({ user: ret });
            });
        var REQUEST_URL="http://10.0.2.2:3000/doc/query?id="+this.state.user.id;
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
    renderItem({item}){
        return(
            <View style={styles.Flatcontainer}>
                <Image
                    source={{uri:item.pic}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mail',)}>
                        <Icon name="pen"  size={20} color="#000000" />
                    </TouchableOpacity>

                    <Text style={styles.title}>{item.sym}</Text>
                    <Text style={styles.info}>{item.date}</Text>
                </View>
            </View>
        );
    }
    _separator = () => {
        return <View style={{height:2,backgroundColor:'#b5b5b5'}}/>;
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={{padding:15,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        width:Dimensions.get('window').width,}}>
                        <View>
                            <Text style={{fontSize: 25}}>{this.state.name}</Text>
                            <Text style={{fontSize: 20}}>{this.state.sex}</Text>
                        </View>
                    </View>
                    <View style={{height:2,backgroundColor:'#b5b5b5'}}/>
                    <Button title='添加检查报告' onPress={()=>this.props.navigation.navigate('addDoc',{
                        onGoBack: ()=>this.fetchData(),
                    })}/>
                    <View style={{height:2,backgroundColor:'#b5b5b5'}}/>
                </View>
                <View style={{height:455}}>
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                        ItemSeparatorComponent={this._separator}
                        data={this.state.data}
                        renderItem={this.renderItem}
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
        alignItems:'center',
    },
    topContainer:{

    },
    topContainerLeft:{

    },
    buttonRight:{

    },
    Flatcontainer:{
        padding:8,
        flex:1,
        width:Dimensions.get('window').width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start",
        backgroundColor:"#FFFFFF"
    },
    thumbnail:{
        width:200,
        height:200
    },
    rightContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:"flex-start",
        alignItems:'flex-end'
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign: "right",
    },
    info:{
        textAlign: "right",
    },
    list:{
        backgroundColor:"#FFFFFF",
        height:50,
    },
    empty:{
        height:80
    }
});