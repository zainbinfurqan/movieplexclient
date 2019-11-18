import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import {  Link } from "react-router-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
function Fotter(props) {
    return (
        <View style={styles.fotter}>
            <Footer>
                <FooterTab>
                    {/* <View style={{ borderWidth: 1, width: '50%' }}>
                        <Link to="/about"> 
                            <Text>About Us</Text>
                        </Link>
                    </View> */}
                    <Button vertical>
                    <Icon type="FontAwesome" name="address-card" />
                        <Text>About Us</Text>
                    </Button>
                   
                    <Button vertical>
                        <Icon type="FontAwesome" name="phone" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    )
}
export default Fotter;
const styles = StyleSheet.create({
    fotter: {
        height: 50,
        width: '100%',
        // backgroundColor: 'green'
    }
})