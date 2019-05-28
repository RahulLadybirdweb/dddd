import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View elevation={5} style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 20
    },
    shadowRadius: 10,
    shadowOpacity: 1.0
}
};
export default Card;
