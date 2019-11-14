import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
function Header(props){
    return(
        <View style={styles.Header}>
            <Text style={styles.textHeader}>Movie Plex</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textHeader:{
        marginTop:7,
        textAlign:'center',
        color:'white',
        fontSize:25,
        fontFamily:'Cochin'
    },
    Header: {
        height: 50,
        width: '100%',
        backgroundColor:'#1f8ed6'
        // borderWidth: 1,
        // marginBottom:5,
        // marginLeft:'5%',
        // marginTop:'5%',
        // marginRight:5,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 2
    }
})
export default Header;