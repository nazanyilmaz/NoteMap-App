import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';

const CustomButton = props => {
  const {loading} = props;
  return (
    <TouchableOpacity {...props} style={styles.container} disabled={loading}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.GRAY} />
      ) : (
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DARKBLUE,
    height: 50,
    width: 360,
    borderRadius: 40,
  },
});
