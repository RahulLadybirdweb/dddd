//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import { ActivityIndicator, StatusBar,
   AsyncStorage, View } from 'react-native';
import {
          createDrawerNavigator,
          createAppContainer,
          createSwitchNavigator,
        }
         from 'react-navigation';
//import Navigator in our project
import SecondPage from './login/SecondPage';
import DrawerNavigator from './login/menu';
//import AlbumList from './login/AlbumList';
//import AlbumDetail from './login/AlbumDetail';
import faveoPage from './login/faveoScreenFlash';

//import CreateTicketScreen from './firstScreen/screens/CreateTicketScreen'
//import AddRequestor from './firstScreen/screens/src/AddRequestor';
//import all the screens we are going to switch 
const Faveo = createDrawerNavigator({
  //Constant which holds all the screens like index of any book 
  //FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
   //SecondPage: { screen: SecondPage }, 
   faveoScreenFlash: {screen: faveoPage },
   menu: { screen: DrawerNavigator },
   //AlbumDetail: { screen: AlbumDetail} ,
   //AlbumList: { screen: AlbumList} 
  //CreateTicketScreen: { screen: CreateTicketScreen },
    ///AddRequestor: { screen: AddRequestor }, 
  }
);

const AuthStack = createDrawerNavigator({SecondPage: SecondPage });

class AuthLoadingScreen extends Component {
  constructor(props) {
  super(props);
  this._loadData();
}
render() {
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}
_loadData = async() => {
  const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  this.props.navigation.navigate(isLoggedIn !== '1'? 'Auth' : 'App');
}
}

//Version 3+ changes are here. 
//In version 2+ createAppContainer was default container 
//but in version 3+ you have to export it manually
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: Faveo,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));