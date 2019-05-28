//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { AsyncStorage, StyleSheet, Image, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity,  Alert, ToastAndroid, Keyboard } from 'react-native';
//import all the components we are going to use.
import Toast from 'react-native-custom-toast';
class SecondPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
      usrname: '',
      password: '',
      hidePassword: true,
      isFocused: true,
  }
}


managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
   /*
  this.state = {
      icEye: 'visibility-off',
      password: true
  }
}
changePwdType = () => {
  let newState;
  if (this.state.password) {
      newState = {
          icEye: 'visibility',
          password: false
      }
  } else {
      newState = {
          icEye: 'visibility-off',
          password: true
      }
  }
  this.setState(newState)
};
 */
  CheckTextInputIsEmptyOrNot = () =>{
    Keyboard.dismiss();
    var status=0;

 const { username }  = this.state ;
 const { password }  = this.state ;

if(username == '' || password == '')
{
  this.refs.infoToast.showToast('Please provide all the details!', 5000);
}

else{
fetch("https://support.faveohelpdesk.com/api/v1/authenticate", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: username,
        password: password,
    })
})
  .then(response => {
      if (response.status === 200) {
        status=200;
       return response.json();
      } else {
        status=response.status;
        this.refs.errorToast.showToast('Please check your credetials!', 5000);
        return;
     }
     })
   .then((responseData) => {

     if (status==200) {
       //Alert.alert(responseData.data.user.role);
       AsyncStorage.setItem('email',responseData.data.user.email);
       AsyncStorage.setItem('role',responseData.data.user.role);
       AsyncStorage.setItem('name',responseData.data.user.first_name+" "+responseData.data.user.last_name);
       this.props.navigation.navigate('faveoScreenFlash');
     }

       //Alert.alert("Token is:"+responseData.data.token);

   })
   .catch((error) => {
     console.log(error);

   })
   .done();
}

}
handleFocus = () => this.setState({isFocused: true})

handleBlur = () => this.setState({isFocused: false})
  render() {
    return (

    <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        flex: 1
      }}>

    <View style={styles.loginContainer}>
        <Text style={styles.login}>Faveo Support</Text>
        <View style={styles.line}>
        <Text style={styles.one}></Text>
        <Text style={styles.two}></Text>
        </View>

        </View>

        <View style={styles.InputContainer}>
        <KeyboardAvoidingView style={styles.searchSection} behavior="padding" enabled>
    <View style={styles.textInputContainer}>

     <TextInput
        onFocus={this.handleFocus}
         onBlur={this.handleBlur}
         style={[styles.textInput, {
             borderBottomColor: this.state.isFocused
                 ? 'black'
                 : '#3da6d7',
             borderBottomWidth: 1,
         }]}
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'User name'}
        underlineColorAndroid = "transparent"
        autoCapitalize="none"

    />
    </View>
    <View style={styles.textInputContainer}>
    <TextInput
     onFocus={this.handleFocus}
     onBlur={this.handleBlur}
     style={[styles.textInput, {
         borderBottomColor: this.state.isFocused
             ? 'black'
             : '#3da6d7',
         borderBottomWidth: 1,
     }]}
    value={this.state.password}
    onChangeText={(password) => this.setState({ password })}
    placeholder={'Password'}
    secureTextEntry = { this.state.hidePassword }
    //secureTextEntry={true}

    />
    <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
    <Image
    source = { ( this.state.hidePassword ) ? require('./screens/assets/hide.png') : require('./screens/assets/view.png') } style = { styles.btnImage } />
    </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
    <View  style={styles.ButtonContainer}>
    <TouchableOpacity elevation={5}
    style={styles.Button}
    onPress={this.CheckTextInputIsEmptyOrNot}
    >
    <Text style={styles.ButtonSign}>SIGN IN</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View />
    <Toast ref = "infoToast" backgroundColor = "#6495ed" position = "bottom"/>
    <Toast ref = "errorToast" backgroundColor = "#ff0000" position = "bottom"/>
    <Toast ref = "successToast" backgroundColor = "#3cb371" position = "bottom"/>
    </View>
    );
  }
  // _login = async() => {
  //   if(userInfo.username === this.state.username && userInfo.password === this.state.password){
  //     //alert('Logd in');
  //     await AsyncStorage.setItem('isLoggedIn', '1');
  //    this.props.navigation.navigate('faveoScreenFlash');
  //   // onPress={() =>navigate('menu')}
  //   }else {
  //     alert('username or Password is incorrect');
  //   }
  // }
}
export default SecondPage;
const styles=StyleSheet.create({
  loginContainer: {
    marginTop: 100,
    marginLeft: 10,
    width: 200
   },
   login: {
    color: 'gray',
    fontSize: 22,
     fontFamily: 'Montserrat-Medium',
     width: 180,
  },
  textInput: {
    alignSelf: 'stretch',
    paddingRight: 40,
    paddingLeft: 0,
    borderColor: '#00aeef',
    width: '90%',
    paddingVertical: 0,
    height: 45,
    marginLeft: '5%',
    marginTop: '6%',
    fontSize: 20,
    borderBottomWidth: 2,
    fontFamily: 'Montserrat-Medium'
  },
  Button: {
    alignSelf: 'stretch',
    backgroundColor: '#3da6d7',
    padding: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15%',
    margin: 30,
    height: 50,
    fontSize: 20,
    borderRadius: 8,
    shadowColor: '#000000',
    fontFamily: 'Montserrat-Medium',
    shadowOffset: {
      width: 10,
      height: 30
    },
    shadowRadius: 20,
    shadowOpacity: 1.0
  },
  ButtonSign: {
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
    justifyContent: 'center'
  },
  icon: {
    marginRight: '1%',
    height: 40,
    width: 40,
    top: '40%',
    right: 0,
    position: 'absolute',
    alignItems: 'flex-end',
},
visibilityBtn:
  {
    position: 'absolute',
    marginRight: '1%',
    right: 15,
    height: 30,
    width: 30,
    top: '40%',
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
line: {
  flexDirection: 'row',
  top: -15
},
one:{
  borderBottomColor: '#00aeef',
  borderBottomWidth: 3,
  width: 65,
},
two: {
  borderBottomColor: '#00aeef',
  borderBottomWidth: 3,
  width: 90,
  marginLeft: 9
},
InputContainer: {
  flexDirection: 'column',
  justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom:120,
},
ButtonContainer: {
  top: '5%',
  alignItems: 'center',
  justifyContent: 'center',
},
textInputContainer: {
  alignItems: 'center',
  justifyContent: 'center',
},
});