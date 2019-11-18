import React, { Component } from 'react';
import { View, Text, Icon } from 'native-base';
import { Link } from "react-router-native";
import { TouchableHighlight } from 'react-native';


class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleBackHome = () => {
        // console.log(this.props.history.push('/'),"abc")
        this.props.history.push('/')
    }
    render() {
        return (
            <View style={{
                backgroundColor: '#fff',
            }}>
                <TouchableHighlight onPress={this.handleBackHome} underlayColor="white">
                    <View style={{
                        width: '20%',
                        height: 30,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        paddingLeft: 10,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flex: 1,
                        // borderWidth: 1,
                    }} >
                        {/* <Link
                    to='/'
                > */}
                        <Icon type="FontAwesome" name="arrow-left" style={{
                            fontSize: 20,
                            paddingRight: 5
                        }} />

                        <Text style={{}}>Back</Text>
                        {/* </Link> */}
                    </View>
                </TouchableHighlight>
                <View style={{
                    width: '100%',
                    height: 200,
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View>
                        <Text > <Icon type="FontAwesome" name="headphones" style={{
                            fontSize: 20,
                            paddingLeft: 10,
                            paddingRight: 10
                        }} /> We here for you</Text>

                    </View>

                    <View>
                        <Text>+92 302 2408099</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default AboutUs;