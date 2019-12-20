import React from 'react';
import {View, Text} from 'react-native';

export default class ListScreen extends React.Component {
  render() {
    return(
      <View style={{flex:1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>
            Lista 
          </Text>
        </View>
      </View>
    );
  }
}