import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/notes/CustomButton';
import {HOME} from '../../utils/route';

const AddPlace = ({route, navigation}) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const {coordinate} = route?.params;

  const saveLocation = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
      coordinate: coordinate,
    };
    firestore()
      .collection('Location')
      .add(form)
      .then(() => {
        Alert.alert('A New Location added!');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        {
          setLoading(false), navigation.navigate(HOME);
        }
      });
  };
  return (
    <SafeAreaView>
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
          title="Add Location"
          onPress={() => {
            saveLocation();
          }}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddPlace;

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
