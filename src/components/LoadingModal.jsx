import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/colors';

const LoadingModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent animationType="fad">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.7)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: 'white', padding: 25, borderRadius: 20}}>
          <ActivityIndicator size={'large'} color={Colors.GRAY} />
          <Text style={{marginTop: 10, fontSize: 16, fontWeight: '500'}}>
            Loading...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({});
