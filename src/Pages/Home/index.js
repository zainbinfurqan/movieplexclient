import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import { Dimensions } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const screenHeight = (Math.round(Dimensions.get('window').height));

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            abc: 'false',
            xyz: {height:screenHeight}
        }
    }
    async componentDidMount() {

        try {
            console.log("abc")
            const pokemonApiCall = await fetch('https://secure-atoll-21678.herokuapp.com/cenima');
            // this.setState({ abc: pokemonApiCall });

            const pokemon = await pokemonApiCall.json();
            console.log(pokemon)
            this.setState({ movieData: pokemon, abc: "abc" });
        }
        catch (err) {
            console.log("Error fetching data-----------", err);
        }

    }
    render() {
        return (
            <View style={this.state.movieData.length == 0 && this.state.xyz} >
                {this.state.movieData.length == 0 &&
                    <View style={{ width: '100%', height: '100%', backgroundColor: '',  justifyContent: 'center',
                    alignItems: 'center' }}>
                        <Bubbles size={10} color="#00000" style={{
                            // flex: 2,
                            // width: 50,
                            // height: 100,
                            // borderWidth: 1
                        }} />
                    </View>}
                {this.state.movieData.map((items, index) => {
                    return (
                        // <View style={{height:200,width:'90%',borderWidth:1}}>
                        <Card key={index}>
                            <CardImage
                                source={require('../../images/c2.jpg')}
                                title={items.CenimaName}
                            />
                            <CardTitle
                                subtitle="Total 5 Movies"
                            />
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ width: 50, height: 50, paddingLeft: 6 }}>
                                    <Image
                                        source={require('../../images/location.png')}
                                        style={{ width: '70%', height: '100%' }}
                                    />
                                </View>
                                <View style={{ width: '80%', height: 'auto', }}>
                                    <Text style={{ fontSize: 18, marginTop: 10 }}>{items.CenimaLocation}</Text>
                                </View>
                            </View>
                            <View style={{flex:1,  alignItems: 'flex-end' ,width:'100%'}} >
                                <Link
                                    to={{ pathname: '/about', state: { data: items } }}
                                >
                                    <Text style={styles.GoToLink}
                                    >Go to Cenima</Text>
                                </Link>
                            </View>
                        </Card>

                        // </View>

                    )
                })}
            </View>
        )
    }
}
export default Index;
const styles = StyleSheet.create({
    GoToLink: {
        alignItems: 'center',
        textAlign: "right",
        // borderWidth:1,
        // width:100,
        marginRight: 10,
        marginBottom:10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Loader: {
        flex: 1,
        borderWidth: 1,
        // position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
        // height: 100,
        // width: 50,
        alignSelf: "center",
        // paddingTop: 50
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch',
        // width:'50%',
        // borderWidth:1,
        // height: 100
    },
    // loaderDiv: {
    //     height:'90%',
    //     width:'100%',
    //     borderWidth: 1,
    //     alignContent: "center"
    // },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    leftIcon: {
        width: '10%',
        borderWidth: 1,
        height: 10,

    },
    rightIcon: {
        width: '90%',
        borderWidth: 1,
        height: 10
    },

    viewtag: {
        height: '100%',
        position: 'absolute',
        backgroundColor: 'red'
    },
    text_name: {
        fontSize: 15,
        textAlign: 'center'
    },
    text_location: {
        textAlign: 'center',
        fontSize: 20
    },
    text: {
        height: 50,
        width: '100%',
    },
    img_tag: {
        height: 300,
        width: '100%',
    },
    HomeMain: {
        // height: 300,
        width: '90%',
        borderWidth: 1,
        marginBottom: 5,
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    }
})