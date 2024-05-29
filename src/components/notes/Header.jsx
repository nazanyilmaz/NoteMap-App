import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustonInput from '../CustonInput';
import {Colors} from '../../theme/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 30, marginBottom: 10}}>
        <CustonInput />
      </View>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: Colors.DARKBLUE}}>
        Notes
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'space-between',
  },
});
