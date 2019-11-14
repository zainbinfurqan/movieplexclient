import React from 'react';
import { View, Text } from 'native-base';
import { NativeRouter, Route, Link } from "react-router-native";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';
function ContactUs(props) {
    return (
        <View>
            <View style={styles.contactMain}>
                <Text style={styles.headingContact}>Contact us</Text>
                <Text style={styles.subHeadingContact}>+92 302 408099</Text>
                <Text style={styles.subHeadingContact}>Zain.ahmed@gmail.com</Text>

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
    contactMain: {
        height: 200,
        width: '100%',
        backgroundColor: '#1f8ed6'
    },
    subHeadingContact: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    },
    headingContact: {
        textAlign: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 25
    }
})
export default ContactUs;