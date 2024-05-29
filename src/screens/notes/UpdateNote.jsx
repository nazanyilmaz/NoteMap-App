import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/notes/CustomButton';
import {useNavigation} from '@react-navigation/native';

const UpdateNote = ({route}) => {
  const navigation = useNavigation();
  const {note} = route?.params;
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [date, setDate] = useState(note.date);
  const [loading, setLoading] = useState(false);

  const saveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
    };
    firestore()
      .collection('Notes')
      .doc(note?.id)
      .update(form)
      .then(() => {
        Alert.alert('Note Updated!');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Type title"
          value={title}
          onChangeText={value => setTitle(value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="Type description"
          value={description}
          onChangeText={value => setDescription(value)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="Type date"
          value={date}
          onChangeText={value => setDate(value)}
        />
      </View>
      <View style={{justifyContent: 'center', marginTop: 40}}>
        <CustomButton
          title="Update Note"
          onPress={() => {
            saveNote(), navigation.navigate('Notes');
          }}
          loading={loading}
        />
      </View>
    </>
  );
};

export default UpdateNote;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    margin: 20,
    backgroundColor: '#dce1e8',
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
  },
});
