//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
// import all basic components
 
export default class SupportScreen extends Component {
  //Screen2 Component
  static navigationOptions ={
    
    drawerIcon: ({ tintColor }) => (
     <Icon name="md-help-circle" style={{fontSize: 24, color: tintColor }}
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
     <Text style={{fontSize: 20, marginTop: 5,marginLeft: 20, fontWeight: '500',color: '#fff'}}>SUPPORT</Text>
     
      </View>
      <View style={styles.login}>
        <Text style={{ fontSize: 18,margin: 1 }}> Login </Text>
        <Text style={{ fontSize: 18,margin: 1 }}> Logging into the android app</Text>
        </View>
        <View style={styles.login}>
        <Text style={{ fontSize: 18,margin: 1}}> Tickets </Text>
        <Text style={{ fontSize: 18,margin: 1 }}> Managing tickets in android app </Text>
        </View>
        <View style={styles.login}>
        <Text style={{ fontSize: 18,margin: 1}}> Users and agents </Text>
        <Text style={{ fontSize: 18,margin: 1 }}> How to use the user directory</Text>
        </View>
        <View style={styles.login}>
        <Text style={{ fontSize: 18,margin: 1 }}> other features </Text>
        <Text style={{ fontSize: 18,margin: 1 }}> How to use the some other features</Text>
        </View>
       <View style={styles.Item}>
    <TouchableOpacity
    style={styles.Button}
    //onPress={this.buttonClickListener}
    onPress={() =>navigate('menu')}
    >
    <Text style={styles.ButtonSign}>REACH OUT TO US</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.Item}>
    <TouchableOpacity
    style={styles.Button}
    //onPress={this.buttonClickListener}
    onPress={() =>navigate('menu')}
    >
    <Text style={styles.ButtonSign}>RATE THE APP</Text>
    </TouchableOpacity>
    </View>
    </View>
    );
  }
}
 
const styles = StyleSheet.create({
  login: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
  ButtonSign: {
    fontSize: 15,
    color: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    alignSelf: 'stretch',
    backgroundColor: '#8c8c8c',
    width: '90%',
    marginLeft: '3%',
    margin: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 20
    },
    shadowRadius: 10,
    shadowOpacity: 1.0
  },
  Item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
});