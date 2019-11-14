import React from 'react';
import { View, Text } from 'native-base';
import { NativeRouter, Route, Link } from "react-router-native";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';
function AboutUs(props) {
    return (
        <View>
            <View style={styles.aboutMain}>
                <Text style={styles.headingAbout}>About us</Text>
                <Text style={styles.subHeadingAbout}>We Here For You</Text>

            </View>
            <Link to="/" underlayColor="#f0f4f7" style={{
                flex: 1,
                padding: 10
            }}>
                <Text>Back </Text></Link>
        </View>
    )
}
const styles = StyleSheet.create({
    aboutMain: {
        height: 200,
        width: '100%',
        backgroundColor: '#1f8ed6'
    },
    subHeadingAbout: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    },
    headingAbout: {
        textAlign: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 25
    }
})
export default AboutUs;