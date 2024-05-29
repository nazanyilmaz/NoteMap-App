import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/notes/CustomButton';
import {Colors} from '../../theme/colors';

const SignUp = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const setUserUid = async id => {
    try {
      await AsyncStorage.setItem('uid', id);
    } catch (e) {
      // saving error
    }
  };

  const saveUser = userId => {
    const form = {
      userId: userId,
      name: name,
      email: email,
      password: password,
    };
    firestore()
      .collection('Users')
      .doc(userId)
      .set(form)
      .then(() => {
        Alert.alert('A New User added!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSignUp = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        saveUser(response.user.uid);
        setUserUid(response.user.uid);
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{fontSize: 35, fontWeight: 'bold', color: Colors.DARKBLUE}}>
          Sign Up
        </Text>
      </View>
      <View style={{flex: 4}}>
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
            placeholder="Type your email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginHorizontal: 20,
            color: Colors.DARKBLUE,
          }}>
          Password:
        </Text>
        <View style={styles.container}>
          <TextInput
            style={{flex: 1}}
            placeholder="Type Your password"
            value={password}
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
        </View>
      </View>
      <View style={{flex: 2}}>
        <CustomButton
          title="SIGN UP"
          onPress={() => handleSignUp()}
          loading={loading}
        />
      </View>
    </>
  );
};

export default SignUp;

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
