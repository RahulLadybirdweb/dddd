import React,{ Component } from 'react';
import { StyleSheet, Animated, View, Image,ActivityIndicator, } from 'react-native';

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;
    
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
      
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:

export default class faveoPage extends Component {
    componentWillMount(){
         setInterval(() =>{
             this.props.navigation.navigate('menu');
         },7000)
         // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
    render() {
      
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00aeef'}}>
        <FadeInView style={{width: '100%', height: '40%', backgroundColor: '#00aeef', alignItems: 'center', justifyContent: 'center',paading: 40}}>
        <Image
        style={{width: '100%', height: '100%'}}
         source={require('./screens/screens/src/components/image/ANDROID-LOGO.png')} />
        </FadeInView>
        <View style={styles.horizontal}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
       
         </View>

    );
  }
 
}
const styles = StyleSheet.create({
    horizontal: {
      padding: 10
    }
  })
