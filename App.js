/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import ContactUs from './src/ContactUs/ContactUs'
// import Home from './src/Home/Home.js'
import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AboutUs from './src/AboutUs/AboutUs'
import Cenima from './src/Pages/Cenima/Cenima'
import Header from './src/Common/Header/Header'
import Home from './src/Pages/Home/'
import Fotter from './src/Common/Fotter/Fotter'

const App: () => React$Node = () => {
  return (
    <>
      <Header />
      <NativeRouter>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <StatusBar backgroundColor="#20232a" barStyle="light-content" />
          <SafeAreaView>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/cenima" component={Cenima} />
            {/* <Home /> */}


          </SafeAreaView>
        </ScrollView>

      </NativeRouter>
      {/* <Fotter/> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
