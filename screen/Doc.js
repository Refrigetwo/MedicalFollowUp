import React from 'react';
import {Text, View, Button, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
const {width} = Dimensions.get('window');

export default class FollowUp extends React.Component {
    static navigationOptions={
        header:null,
    };
    constructor(props){
        super(props);
        this.state = {
            name:'',
            sex:'',
            sym:'',
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
    _separator = () => {
        return <View style={{height:2,backgroundColor:'#b5b5b5'}}/>;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.topContainerLeft}>
                        <Text style={}>{this.state.name}</Text>
                        <Text style={}>{this.state.sex}</Text>
                        <Text style={}>{this.state.sym}</Text>
                    </View>
                    <View style={styles.buttonRight}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mail')}>
                            <Icon name="pen"  size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:2,backgroundColor:'#b5b5b5'}}/>
                <Button title='添加检查报告' onPress={()=>this.props.navigation.navigate('addDoc')}/>
                <View style={{height:2,backgroundColor:'#b5b5b5'}}/>
                <View>
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
        alignItems:'center',
    },
    topContainer:{

    },
    topContainerLeft:{

    },
    buttonRight:{

    },

});