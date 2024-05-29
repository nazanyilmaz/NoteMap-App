import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {Heart, Trash} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../theme/colors';

const FavoriteCard = ({favorite, index}) => {
  const navigation = useNavigation();

  const deleteNote = () => {
    firestore()
      .collection('Notes')
      .doc(favorite?.id)
      .delete()
      .then(() => {
        Alert.alert('Note Deleted!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  // console.log(note);
  return (
    <View
      style={{
        backgroundColor: '#d3e3fd',
        padding: 20,
        margin: 8,
        borderRadius: 10,
        marginTop: 40,
      }}>
      <View style={{minHeight: 80}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 20, color: Colors.DARKBLUE}}>
          {favorite.title}
        </Text>
        <Text style={{marginVertical: 8, color: Colors.DARKBLUE}}>
          {favorite.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Colors.DARKBLUE}}>{favorite.date}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 3,
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(UPDATENOTE, {note: note})}>
            <Heart size="25" color="red" variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteNote()}>
            <Trash size="25" color={Colors.DARKBLUE} variant="Outline" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({});
