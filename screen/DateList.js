import React from 'react';
import {
    Text,
    View,
    Button,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    RefreshControl,
    TouchableHighlight
} from 'react-native';


export default class DateList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            user:'',
            tDay:'',
            refreshing: false,
        };
        this._onRefresh = this._onRefresh.bind(this);
    }
    static navigationOptions={
        title: '日程表',
        headerStyle: {
            backgroundColor: '#2e74ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    };
    componentDidMount() {
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
        this.setState({
            data:[]
        });
        const { navigation } = this.props;
        const tDay = navigation.getParam('day', '');
        this.setState({
            tDay:tDay
        });
        var REQUEST_URL="http://10.128.199.8:3000/sch/query?id="+this.state.user.id+'&date='+tDay.dateString;
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
                        <Text style={styles.title}>{item.content}</Text>
                        <Text style={styles.info}>{item.time}</Text>
                        <Text style={styles.info}>{item.fre}</Text>
                </View>
        );
    }
    _separator = () => {
        return <View style={{height:2,backgroundColor:'#b5b5b5'}}/>;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Flatcontainer}>
                    <Text style={styles.title}>提醒名称</Text>
                    <Text style={styles.title}>时间</Text>
                    <Text style={styles.title}>用药频率</Text>
                </View>
                <View style={{height:2,backgroundColor:'#b5b5b5'}}/>
                <View style={{height:450}}>
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
                <View style={styles.Flatcontainer}>
                    <Button title='新建用药提醒' onPress={()=>this.props.navigation.navigate('newMed',{
                        day:this.state.tDay,
                        id:this.state.user.id
                    })}/>
                    <Button title='新建其他日程' onPress={()=>this.props.navigation.navigate('newSch',{
                        day:this.state.tDay,
                        id:this.state.user.id
                    })}/>
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
        justifyContent:"space-between",
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