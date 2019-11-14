import React, { useEffect, useState, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import {
    Icon,
    //  Image
} from 'react-native-elements'
import location from '../images/location.png'
// import { Icon, Badge, Left, Right } from 'native-base';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { NativeRouter, Route, Link } from "react-router-native";


import Header from '../Header/Header'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import c2 from '../images/c2.jpg'
const data = [
    { cenimaName: 'cenima 1', Location: 'Nazimabad no 1, karachi', img: require('../images/c2.jpg') },
    { cenimaName: 'cenima 2', Location: 'Saddar ,Karachi', img: require('../images/c2.jpg') },
    { cenimaName: 'cenima 3', Location: 'DHA phase 5 , Karachi', img: require('../images/c2.jpg') },
    { cenimaName: 'cenima 4', Location: 'Usmania socity , Karachi', img: require('../images/c2.jpg') },
    // { cenimaName: 'cenima 5', Location: 'karachi' },
    // { cenimaName: 'cenima 6', Location: 'karachi' },
]
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            abc: 'false'
        }
    }
    goToCenimaHandle = () => {
        // console.log(this.props.history.push)
        this.props.history.push('/cenima')
    }
    //state
    // let [States_, setData] = useState({
    //   
    // });
    // abd = () => {
    //     this.setState({
    //         abc: "true",
    //     });
    // }
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
            <View >
                <Header />

                {this.state.movieData.length == 0 ? (
                    <View style={{
                        flex: 1,
                        width: '100%',
                        height: 500,
                        alignItems: 'flex-start',
                    }}>
                        <View
                            style={{
                                flex: 1,
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth:1,
                            }}>
                            <Bubbles size={10} color="#00000" style={{
                                flex: 1,
                                width: 50,
                                height: 100,
                                borderWidth:1
                            }} />
                        </View>
                    </View>
                ) : (
                        this.state.movieData.map((items, index) => {
                            return (
                                <View key={index} style={styles.HomeMain}>
                                    <Card>
                                        <CardImage
                                            source={items.ImagPath}
                                            title={items.CenimaName}
                                        />
                                        <CardTitle
                                            subtitle="Total 5 Movies"
                                        />
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ width: 50, height: 50, paddingLeft: 6 }}>
                                                <Image
                                                    source={require('../images/location.png')}
                                                    style={{ width: '70%', height: '100%' }}
                                                />
                                            </View>
                                            <View style={{ width: '80%', height: 'auto', }}>
                                                <Text style={{ fontSize: 18, marginTop: 10 }}>{items.CenimaLocation}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Link
                                                to={{ pathname: '/cenima', state: { data: items } }}
                                            >
                                                <Text style={styles.GoToLink}
                                                >Go to Cenima</Text>
                                            </Link>
                                        </View>
                                    </Card>
                                </View>

                            )
                        })
                    )}


                < View style={{ flex: 1, flexDirection: 'row' }}>
                    <Link to="/about" style={styles.navItem}>
                        <Text>About Us</Text>
                    </Link>
                    <Link to="/contact" style={styles.navItem}>
                        <Text>Contact Us</Text>
                    </Link>
                </View >
            </View >
        )
    }
}

const styles = StyleSheet.create({
    GoToLink: {
        borderWidth: 1,
        justifyContent: 'flex-end',
        textAlign: "right",
        // marginTop: 10,
        marginRight: 10,
        flex: 2,
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
export default Home;