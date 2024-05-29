import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constans';
import {User} from 'iconsax-react-native';
import {Colors} from '../theme/colors';

const Avatar = ({user}) => {
  return (
    <View>
      <Image
        style={styles.container}
        source={{
          uri: 'https://udemig.com/assets/images/Udemig.png',
        }}
      />
      {/* : <User size={50} color="#fff" variant="Bold" /> */}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: 'white',
    color: 'fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
