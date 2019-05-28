import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, Alert, BackHandler, Picker, KeyboardAvoidingView
} from 'react-native';
import { Icon } from 'native-base';
//import Child from './src/AddRequestor';
//import {
 // createDrawerNavigator,
//} from 'react-navigation';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import all basic components

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
      />
    );
  }
}
class CreateTicketScreen extends Component {
  static navigationOptions ={
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerIcon: ({ tintColor }) => (
     <Icon name="md-cash" style={{fontSize: 24, color: tintColor }}
     />
    ),
 }
  constructor(props) {
    super(props);
    this.back_Button_Press = this.back_Button_Press.bind(this);
    this.state = {
      text: '',
      TextInputValue: '',
      ErrorStatus : true,
      PickerValue: '',
      PickerItem: '',
      PickerUserName: '',

     };
  }
  onEnterText = (TextInputValue) =>{
    if(TextInputValue.trim() != 0){
     this.setState({TextInputValue : TextInputValue, ErrorStatus : true}) ;
   }else{
       this.setState({TextInputValue : TextInputValue, ErrorStatus : false}) ;
   }
 }

componentWillMount() {

  BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
}

componentWillUnmount() {

  BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
}

back_Button_Press = () => {

  // Put your own code here, which you want to exexute on back button press.
  Alert.alert(
    ' Exit From App ',
    ' Do you want to exit From App ?',
    [
      { text: 'Yes', onPress: () => BackHandler.exitApp() },
      { text: 'No', onPress: () => console.log('NO Pressed') }
    ],
    { cancelable: false },
  );

  // Return true to enable back button over ride.
  return true;
}

     render () {

          return(
            <View>
              <View style={{flexDirection: 'row',backgroundColor: '#154C66', padding: 10}}>

        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}
        style={{fontSize: 30, color: '#fff' }}
     />
     <Text style={{fontSize: 16, marginTop: 5,marginLeft: 20, fontWeight: '200',color: '#fff', fontFamily: 'Montserrat-Medium'}}>CREATE TICKET</Text>

      </View>
      
        <ScrollView style={{backgroundColor: '#fff'}}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{marginLeft: 10, marginRight: 10,marginBottom: 10}}>

        <View style={styles.Main}>
        <Text style={styles.Cc}>Email</Text>
        <View style={{marginTop: 30}}>
        <TextInput
        style={styles.input}
        onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
        underlineColorAndroid = "transparent"
         behavior="padding"
         />
         </View>
         </View>
        <View style={styles.Main}>
        <Text style={styles.Cc}>Name</Text>
        <View style={{marginTop: 30}}>
        <TextInput
        style={styles.input}
        onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
        underlineColorAndroid = "transparent"
         behavior="padding"
         />
         </View>
         </View>
         <View style={styles.Main}>
        <Text style={styles.Cc}>Subject <Text style={{color: 'red'}}>*</Text></Text>
        <View style={{marginTop: 30}}>
        <TextInput
        style={styles.input}
        onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
        underlineColorAndroid = "transparent"
         behavior="padding"
         />
         </View>
         </View>
         <View style={styles.Main}>
        <Text style={styles.Cc}>Priority <Text style={{color: 'red'}}>*</Text></Text>

        <View style={{marginTop: 20}}>
         <Picker
         style={{width: '100%'}}
         selectedValue={this.state.PickerValue}
         onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
         >
         <Picker.Item label="--" value="--" />
         <Picker.Item label="Emergency" value="Emergency" />
         <Picker.Item label="High" value="High" />
         <Picker.Item label="Low" value="Low" />
         <Picker.Item label="Normal" value="Normal" />

         </Picker>
         <Text style={{width: '100%',borderBottomColor: 'lightgray',
    borderBottomWidth: 1,top: -30}} />
         </View>
         </View>
         <View style={styles.Main}>
        <Text style={{fontSize: 15,marginLeft: 12,top: -30}}>Helptopic <Text style={{color: 'red'}}>*</Text></Text>
        <View>
        <Picker
         style={{width: '100%'}}
         selectedValue={this.state.PickerItem}
         onValueChange={(itemValue,itemIndex) => this.setState({ PickerItem:itemValue})}
         >
         <Picker.Item label="--" value="--" />
         <Picker.Item label="Faveo Helpdesk" value="Faveo Helpdesk" />
         <Picker.Item label="Jobs/Careers" value="Jobs/Careers" />
         <Picker.Item label="Miscellaneous" value="Miscellaneous" />
         <Picker.Item label="Promotions/Ads" value="Promotions/Ads" />
         <Picker.Item label="Web Hosting & Domian Registraation" value="Web Hosting & Domian Registraation" />
         <Picker.Item label="Website design & development" value="Website design & development" />

         </Picker>
         <Text style={{width: '100%',borderBottomColor: 'lightgray',
    borderBottomWidth: 1,top: -30}} />
         </View>
         </View>

         <View style={styles.Main}>
        <Text style={{fontSize: 15,marginLeft: 12,top: -30}}>Message <Text style={{color: 'red'}}>*</Text></Text>
        <UselessTextInput
               multiline = {true}
               style={styles.MessageInput}
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
             />
        </View>
        </View>
        </KeyboardAvoidingView>
        <View style={{marginLeft: 10, marginRight: 10,marginBottom: 10}}>
         <View style={styles.Item}>
        <TouchableOpacity style={styles.Button}>
    <Text style={styles.ButtonSign}>CREATE TICKET</Text>
    </TouchableOpacity>
    </View>
    </View>
    
         </ScrollView>
         </View>
          );

        }
      }

      export default CreateTicketScreen;
      const styles = StyleSheet.create({
        container: {
          flex: 1,
      },
        Main: {
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginTop: 8,
          marginLeft: '1%',
          marginRight: '1%',
          fontFamily: 'Montserrat-Medium'
        },
        Cc: {
          fontSize: 15,
          marginLeft: 8,
          fontFamily: 'Montserrat-Medium'
        },
        thumbnailStyle: {
          marginTop: 25,
        },
        Button: {
          height:40,
          width: 40,
          top: -20,
          position: 'absolute',
          right: 0,
          alignItems: 'flex-end',
          borderRadius: 50,
        },
        thumbnailContainerStyle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
          marginLeft: '1%',
          marginRight: '1%',
        },
        RequestorContainerStyle: {
          flexDirection: 'column',
          justifyContent: 'space-around',
        },
        ButtonSign: {
          fontSize: 18,
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Montserrat-Medium'

        },
        Button: {
          alignSelf: 'stretch',
          backgroundColor: '#00aeef',
          width: '100%',
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
          marginTop: 10,
          marginBottom: 50,
        },
        input: {
          alignSelf: 'stretch',
          padding: 0,
          borderColor: 'lightgray',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          fontSize: 16,
          borderBottomWidth: 1,
        },
        MessageInput: {
          alignSelf: 'stretch',
          padding: 0,
          borderColor: 'lightgray',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          fontSize: 16,
          borderBottomWidth: 1,
        },
});
