import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import { Icon } from 'native-base';

function Header(props) {

    function Location() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => { GetLocation() } },
            ],
            { cancelable: false },
        );
    }
    function GetLocation() {
        console.log("get location")
    }

    return (
        <View style={styles.header}>
            <TouchableHighlight
                onPress={Location}
            >
                <View style={styles.location}>
                    <Icon type="FontAwesome" name="map-marker" style={{ fontSize: 40, color: 'white' }} />
                </View>
            </TouchableHighlight>
            <View>

            </View>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    header: {
        alignItems: 'flex-end',
        // borderWidth:1,
        height: 50,
        width: '100%',
        backgroundColor: '#09aad6'
    },
    location: {
        flex: 1,
        // borderWidth:1,
        alignItems: 'center',
        height: '100%',
        width: 50,
    }
})