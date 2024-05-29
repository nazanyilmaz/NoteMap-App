import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowCircleRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../../utils/route';

const CustomCallout = ({title, description}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#00649b',
        }}>
        {title}
      </Text>
      <Text style={{fontSize: 10, textAlign: 'center'}}>{description}</Text>
      <View style={{marginStart: 90}}>
        <ArrowCircleRight size="18" color="#00649b" variant="Bold" />
      </View>
    </TouchableOpacity>
  );
};

export default CustomCallout;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
  },
});
