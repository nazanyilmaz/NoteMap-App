import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CustomButton from '../../components/notes/CustomButton';
import {Colors} from '../../theme/colors';
import Avatar from '../../components/Avatar';
import {PROFILE} from '../../utils/route';

const ProfileUpdate = ({route, navigation}) => {
  const {user} = route?.params;
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [loading, setLoading] = useState(false);

  const UpdateUser = () => {
    setLoading(true);
    const form = {
      name: name,
    };
    firestore()
      .collection('Users')
      .doc(user.userId)
      .update(form)
      .then(() => {
        Alert.alert('User updated!');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: Colors.DARKBLUE,
            marginTop: 60,
          }}>
          Profile Update
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 50,
          }}>
          <Avatar />
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginHorizontal: 20,
            color: Colors.DARKBLUE,
          }}>
          Name:
        </Text>
        <View style={styles.container}>
          <TextInput
            placeholder="Type your Fullname"
            value={name}
            onChangeText={value => setName(value)}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginHorizontal: 20,
            color: Colors.DARKBLUE,
          }}>
          Email:
        </Text>
        <View style={styles.container}>
          <TextInput
            editable={false}
            placeholder="Type your email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
      </View>
      <View style={{flex: 2}}>
        <CustomButton
          title="Profile Update"
          onPress={() => {
            UpdateUser(), navigation.navigate(PROFILE);
          }}
          loading={loading}
        />
      </View>
    </>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#dce1e8',
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
});
