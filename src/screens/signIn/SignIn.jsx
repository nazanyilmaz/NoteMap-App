import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/notes/CustomButton';
import {Colors} from '../../theme/colors';

const SignIn = ({navigation}) => {
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

  const handleSignIn = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('User  signed in!');
        setUserUid(data.user.uid);
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
          Sign In
        </Text>
      </View>
      <View style={{flex: 3}}>
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
          title="SIGN IN"
          onPress={() => handleSignIn()}
          loading={loading}
        />
      </View>
    </>
  );
};

export default SignIn;

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
