import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import { Card, CardTitle, CardImage } from 'react-native-cards';
import { NativeRouter, Route, Link } from "react-router-native";

class Cenima extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cenimaName: '',
            cenimaData: []

        }
    }
    async componentDidMount() {
        this.setState({ cenimaName: this.props.location.state.data.CenimaName })
        // console.log(this.props.location.state.data.cenimaName)
        let id = this.props.location.state.data.CenimaID
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const pokemonApiCall = await fetch(`https://secure-atoll-21678.herokuapp.com/movie/${id}`);
            // this.setState({ abc: pokemonApiCall });

            const pokemon = await pokemonApiCall.json();
            console.log(pokemon, "result")
            this.setState({ cenimaData: pokemon });
        }
        catch (err) {
            console.log("Error fetching data-----------", err);
        }
    }
    render() {
        console.log(this.state.cenimaData)
        return (
            <>
                <View>
                    <Link to="/" underlayColor="#f0f4f7" style={{
                        flex: 1,
                        padding: 10
                    }}>
                        <Text>Back </Text>
                    </Link>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{this.state.cenimaName}</Text>

                </View>
                <View>
                    {this.state.cenimaData.length == 0 &&
                    <Text>ABC</Text>
                    //  <Bubbles size={10} color="#FFF" />
                    }
                    {/* {this.state.cenimaData.length > 0 &&
                        this.state.cenimaData.map(items => {
                            return (
                                <Card>
                                    <CardImage
                                        source={require('../../images/c2.jpg')}
                                        title={items.MovieName}
                                    />
                                    <View>
                                        <Text>Screening Data : {items.MovieDate}</Text>
                                        <Text>Genric : {items.MovieGenric1}, {items.MovieGenric2}, {items.MovieGenric3}</Text>
                                        <Text>Time : {items.MovieTime1}, {items.MovieTime2}, {items.MovieTime3}</Text>
                                    </View>

                                </Card>
                            )
                        })
                    } */}

                </View>

            </>

        )
    }
}
export default Cenima

const styles = StyleSheet.create({

})