
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon} from 'native-base';
// import all basic components
 
export default class AboutScreen extends Component {
  //Screen2 Component
  static navigationOptions ={
    
    drawerIcon: ({ tintColor }) => (
     <Icon name="md-information-circle" style={{fontSize: 24, color: tintColor }}
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
     <Text style={{fontSize: 20, marginTop: 5,marginLeft: 20, fontWeight: '500',color: '#fff'}}>ABOUT</Text>
     
      </View>
      <ScrollView>      
        <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23, }}> Faveo HELPDESK </Text>
        <Text style={{ fontSize: 15,  marginTOp: '3%', margin: 5 }}> Version 5.1 </Text>
        <Text style={{ fontSize: 23,  marginTOp: '3%', width: '95%',margin: 5 }}>
        Headquartered in Bangalore, Faveo Helpdesk provides Businesses with an automated Helpdesk system to manage customer support.  The word Faveo comes from Latin which means to be favourable. Which truly highlights vision and the scope as well as the functionality of the product that Faveo is. It is specifically designed to cater the needs of startups and SME’s empowering them with state of art, ticket based support system. In today’s competitive startup scenario customer retention is one of the major challenges. Handling client query diligently is all the difference between retaining or losing a long lasting relationship. The company is driven with passion of providing tools for managing consumer queries for strategic insights and helping companies take those decisive decisions.
        </Text>
        <View style={styles.Item}>
        <TouchableOpacity style={styles.Button}
         onPress={() => Linking.openURL('https://www.faveohelpdesk.com/')}>
    <Text style={styles.ButtonSign}>WEBSITE</Text>
    
    </TouchableOpacity>
    <Text style={styles.donoted}>wwww.faveohelpdesk.com</Text>
      </View>
      </View>
      </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 20,
  },
  ButtonSign: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    alignSelf: 'stretch',
    backgroundColor: '#00aeef',
    padding: 20,
    width: '70%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15%',
    marginRight: '15%',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 20
    },
    shadowRadius: 10,
    shadowOpacity: 1.0
  },
  donoted: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 30,
  },
  Item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});