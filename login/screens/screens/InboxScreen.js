import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image,
   ToastAndroid,  ActivityIndicator
} from 'react-native';
import { Icon} from 'native-base';
import RF from "react-native-responsive-fontsize";
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';
import Button from './src/components/Buttom';

class InboxScreen extends Component{
  static navigationOptions ={
    
    drawerIcon: ({ tintColor }) => (
     <Icon name="md-mail" style={{fontSize: 24, color: tintColor }}
     />
    ),
 }
  constructor(){
    super()
    this.state={
      dataSource: [],
      isLoading: true
    }
  }

  renderItem = ({ item }) => {

    return(
      <Card onPress={ () => this._onPress(item)}>
  <CardSection>
  <View style={styles.MainContainer}>
  <View style={styles.thumbnailContainerStyle}>
  <Image  style={styles.thumbnailStyle}
  source={{ uri: item.picture.medium }} />
  </View>
  <View style={styles.Main}>
  <View style={styles.containerImageStyle}>
 
       <Icon name="md-mail" style={{fontSize: 20, color: '#000' }} />
      
  <Text style={styles.ImageheaderTextStyle}>{item.name.title +" "+ item.name.first +" "+ item.name.last}</Text>
  <View style={styles.containerValue}>
  <Text style={styles.ValueStyle}>{item.id.name+" "+ item.id.value}</Text>
  </View>
  </View>
  <View style={styles.HeaderContenStyle}>

  <Text style={styles.headerTextTitleStyle}>
  {item.email}
      </Text>
      <Text>{item.login.username}</Text>
  </View>
  <View style={styles.containerTimeStyle}>
  <Text style={styles.timeStyle}>{item.registered.date}</Text>
  </View>
  </View>
  </View>
  </CardSection>
  <CardSection>
  <Button />
  </CardSection>
  </Card>
    );

  }

  _onPress(item) {
    this.props.navigation.navigate('Settings', {
      itemId: item.name.title+" "+item.name.first+" "+item.name.last,
      title: item.picture.medium,
    });
  }

 // renderSeparator =() => {
 //   return (
  //    <View style={{height: 10, width: '95%', backgroundColor: 'gray' }}>
  //    </View>
  //  );
 // }
 
  actionOnRow(item) {
    ToastAndroid.show('Selected Item :'+item.name.title+" "+item.name.first+" "+item.name.last, ToastAndroid.SHORT);
}

  componentDidMount() {
    const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=2000'

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.results,
          isLoading: false
        })
    })
    .catch((error) => {
      console.log(error)

    })

  }

  render(){
    return(
      this.state.isLoading
      ?
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#330066" animating />
      </View>
      :
      <View style={styles.container}>
      <View style={{flexDirection: 'row',backgroundColor: '#154C66', padding: 10}}>
        
        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}
        style={{fontSize: 35, color: '#fff' }}
     />
     <Text style={{fontSize: 20, marginTop: 5,marginLeft: 20, fontWeight: '500',color: '#fff'}}>INBOX</Text>
     <View style={{flexDirection: 'row',right: 0,alignItems: 'flex-end',justifyContent: 'flex-end', flex:1}}>
     <Icon name="md-search" 
        style={{fontSize: 30, color: '#fff' ,marginRight: 10}}
     />
     <Icon name="md-notifications"
        style={{fontSize: 30, color: '#fff' }}
     />
     </View>
      </View>
      <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index}
     // ItemSeparatorComponent={this.renderSeparator}
      />
      </View>
    );
  }
}

export default InboxScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F5FCFF',
    marginTop: -2,
  },
  HeaderContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  MainContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  headerTextTitleStyle: {
    fontSize: 15,
    color: '#000',
    
  },
  containerImageStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 4,
    flex: 1,
  },
  Main: {
    flexDirection: 'column',
    padding: 10,
    margin: 4,
  },
  headerImageStyle: {
    height: 20,
    width: 20,
    margin: 4,
  },
  ImageheaderTextStyle: {
    fontSize: RF(2.5),
    marginLeft: 4,
  },
  containerValue: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 50,
  },
  ValueStyle: {
    fontSize: RF(2.0),
    backgroundColor: 'red',
    
  },
  thumbnailStyle: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  image: {
    height: 20,
    width: 20,
  },
  thumbnailContainerStyle: {
    padding: 10,
  },
  timeStyle: {
    fontSize: 13,
    marginTop: 4,
  },
});
