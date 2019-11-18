import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import Header from '../Header/Header'
import Fotter from '../Fotter/Fotter'
function Layout(props) {
    return (
        <View style={styles.layout}>
            {/* <Header /> */}
            {props.children}
            {/* <Fotter /> */}
        </View>
    )
}
export default Layout;
const styles = StyleSheet.create({
    layout: {
        // height:50,
        // width:'100%',
        // backgroundColor:'green'
    }
})