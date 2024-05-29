import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {LocationAdd} from 'iconsax-react-native';

const CustomMarker = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../../assests/marker1.png')}
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 60,
  },
});
