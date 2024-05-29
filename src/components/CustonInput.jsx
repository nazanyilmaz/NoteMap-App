import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/colors';
import {SearchNormal} from 'iconsax-react-native';

const CustonInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" />
      <SearchNormal size="18" color="#b2b2b2" />
    </View>
  );
};

export default CustonInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dce1e8',
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
});
