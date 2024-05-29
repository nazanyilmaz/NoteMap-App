import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {Heart} from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore';
import {FAVORITE} from '../../utils/route';

const MapDetail = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const {item} = route.params;
  const addFavorite = () => {
    setLoading(true);
    firestore()
      .collection('Favorite')
      .add(item)
      .then(() => {
        Alert.alert('Added favorite!');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        {
          setLoading(false), navigation.navigate(FAVORITE);
        }
      });
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View
        style={{
          marginTop: 40,
          paddingVertical: 10,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderBottomWidth: 0.6,
          borderColor: 'gray',
          borderRadius: 40,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00649b'}}>
          Title:
        </Text>
        <Text style={{fontSize: 16, color: '#00649b'}}>{item.title}</Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderBottomWidth: 0.6,
          borderColor: 'gray',
          borderRadius: 40,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00649b'}}>
          Description:
        </Text>
        <Text style={{fontSize: 16, color: '#00649b'}}>{item.description}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          addFavorite(), navigation.navigate(FAVORITE);
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Heart color="red" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MapDetail;

const styles = StyleSheet.create({});
