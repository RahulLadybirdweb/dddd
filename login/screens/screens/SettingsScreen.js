//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';

// import all basic components
 
export default class SettingScreen extends Component {
  //Screen2 Component
  static navigationOptions ={
    
    drawerIcon: ({ tintColor }) => (
     <Icon name="settings" style={{fontSize: 24, color: tintColor }}
     />
    ),
 }
  render() {
    return (
      <View>
      <View style={{flexDirection: 'row',backgroundColor: '#154C66', padding: 10}}>
        
        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()} 
        style={{fontSize: 35, color: '#fff' }}
     />
     <Text style={{fontSize: 20, marginTop: 5,marginLeft: 20, fontWeight: '500',color: '#fff'}}>SETTINGS</Text>
     
      </View>
        <Text style={{ fontSize: 30 }}> CRASH REPORTS </Text>
        <View>
        <Text style={{ fontSize: 15 }}> Send  crash reports </Text>
        
        </View>
      </View>
    );
  }
}
