import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {Edit2, Trash} from 'iconsax-react-native';
import {setColors} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {UPDATENOTE} from '../../utils/route';
import {Colors} from '../../theme/colors';

const NoteCard = ({note, index}) => {
  const navigation = useNavigation();

  const deleteNote = () => {
    firestore()
      .collection('Notes')
      .doc(note?.id)
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
        backgroundColor: setColors(index),
        padding: 20,
        margin: 8,
        borderRadius: 10,
        marginTop: 40,
      }}>
      <View style={{minHeight: 80}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 20, color: Colors.DARKBLUE}}>
          {note.title}
        </Text>
        <Text style={{marginVertical: 8, color: Colors.DARKBLUE}}>
          {note.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Colors.DARKBLUE}}>{note.date}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 3,
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(UPDATENOTE, {note: note})}>
            <Edit2 size="18" color={Colors.DARKBLUE} variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteNote()}>
            <Trash size="18" color={Colors.DARKBLUE} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
