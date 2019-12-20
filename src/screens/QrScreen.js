import * as React from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

const { width } = Dimensions.get('screen');

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    
    const leftTop = {
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderColor: 'white'
    };
    const leftBottom = {
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'white'
    };
    const rightTop = {
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderColor: 'white'
    };
    const rightBottom = {
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'white'
    };

    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) { //Permição Concedida
      return (()=>{}); 
    }if (hasCameraPermission === false) { //Permiçaõ Negada
      return ( 
        <View style={{flex:1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>
            Sem acesso a câmera !
          </Text>
        </View>
      </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          //flexDirection: 'column',
          justifyContent: 'flex-end',
          margin: -10,
        }}>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={{ ...StyleSheet.absoluteFill }}
        />

        <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: width / 1.5 , height: width / 1.5 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftTop }} />
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightTop }} />
            </View>
            <View style={{ flex: 1 }} />
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, ...leftBottom }} />
                <View style={{ flex: 1 }} />
                <View style={{ flex: 1, ...rightBottom }} />
              </View>
          </View>
        </View>

        {scanned && (
          <Button
            title={'Toque para verificar novamente'}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
        
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`O Qr code ${type} de ${data} foi escaneado!`);
  };
}