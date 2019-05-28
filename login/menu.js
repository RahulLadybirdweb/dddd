/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage, Alert, TouchableOpacity, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems,createAppContainer  } from 'react-navigation';
//import SettingsScreen from './screens/SettingsScreen';
import { Icon} from 'native-base';
import CreateTicketScreen from './screens/screens/CreateTicketScreen';
import SecondPage from './SecondPage';

//import InboxScreen from './screens/screens/InboxScreen';
//import AboutScreen from './screens/screens/AboutScreen';
//import MyTickets from './screens/screens/MyTickets';
//import UnassignedTickets from './screens/screens/UnassignedTickets';
//import ClosedTickets from './screens/screens/ClosedTickets';
//import Trash from './screens/screens/Trash';
//import ClientScreen from './screens/screens/ClientScreen';
//import SettingScreen from './screens/screens/SettingsScreen';
//import SupportScreen from './screens/screens/SupportScreen';
//import LogoutScreen from './screens/screens/LogoutScreen';
//import AddRequestor from './screens/screens/src/AddRequestor';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

//type Props = {};


const {width} = Dimensions.get('window');

const CustomDrawerNavigatorItems = ( props) => (
  <SafeAreaView style={{ flex: 1,fontFamily: 'Montserrat-Medium', }}>
  <View style={{ height: 200, backgroundColor: '#154C66',fontFamily: 'Montserrat-Medium',}}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1,fontFamily: 'Montserrat-Medium',}}>
  <Image
        style={{width: '60%', height: '60%'}}
         source={require('../Resources/user.png')} />
     
     <Text style={{marginLeft: 20, marginTop: 10, color: '#ffffff', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>{SecondPage.CheckTextInputIsEmptyOrNot()}</Text>
     </View>
     <View style={{ flexDirection: 'column', justifyContent: 'space-around', flex: 1}}>
     <Text style={{marginLeft: 20, marginTop: 10, color: '#ffffff', fontSize: 20, fontFamily: 'Montserrat-Medium',}}>Sayar Samanta</Text>
     <Text style={{marginLeft: 20, marginTop: 2, color: '#ffffff', fontSize: 15, fontFamily: 'Montserrat-Medium',}}>https://support.faveohelpdesk.com</Text>
     </View>
     </View>
  <ScrollView>
  <DrawerItems {...props}/>
  <TouchableOpacity style={{ flexDirection: 'row',padding: 10}} onPress={()=>
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.navigate('SecondPage')
                  }},
                ],
                { cancelable: false }
              )  
            }>
            <Icon name="md-log-out" style={{marginLeft: 10,fontSize: 24, color: '#000' }}/>
            <Text style={{marginLeft: 35,fontWeight: 'bold',color: '#000'}}>Logout</Text>
            </TouchableOpacity>
  </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  //Inbox: InboxScreen,
  //My_Tickets: MyTickets,
 // Unassigned_Tickets: UnassignedTickets,
 // Closed_Tickets : ClosedTickets,
 // Trash: Trash,
  "Create Ticket": CreateTicketScreen,
  //Client: ClientScreen,
 // Setting: SettingScreen,
 // Support: SupportScreen,
 // About: AboutScreen,
 // Logout: LogoutScreen,
  },
  {
    contentComponent: CustomDrawerNavigatorItems,
    DrawerItems: width,
    contentOptions: {
    activeTintColor : '#3da6d7'
    }
  })
  const DrawerNavigator = createDrawerNavigator({
    AppDrawerNavigator: { screen: AppDrawerNavigator, navigationOptions: { header: null } },
  }
  );


  //For React Navigation 2.+ need to export App only
  //export default App;
  //For React Navigation 3.+
  export default createAppContainer(DrawerNavigator);