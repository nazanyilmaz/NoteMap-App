import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/notes/CustomButton';
import Avatar from '../../components/Avatar';
import {PROFILEUPDATE} from '../../utils/route';

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState('');

  const getUserUid = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');
      if (uid !== null) {
        setUserData(uid);
        getUserInfo(uid);
      }
    } catch (e) {
      // error reading value
    }
  };

  const removeUid = async () => {
    try {
      await AsyncStorage.removeItem('uid');
    } catch (error) {
      console.log('error');
    }
  };

  const getUserInfo = userId => {
    firestore()
      .collection('Users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        //console.log('User data: ', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      });
  };

  useEffect(() => {
    getUserUid();
  }, []);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        removeUid();
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 50,
        }}>
        <Avatar user={userData} />
      </View>
      <View
        style={{
          marginBottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 5}}>
          {userData?.name}
        </Text>
        <Text style={{fontWeight: '500', fontSize: 16}}>{userData?.email}</Text>
      </View>
      <View style={{marginVertical: 100, gap: 15}}>
        <CustomButton
          title="Profile Update"
          onPress={() => navigation.navigate(PROFILEUPDATE, {user: userData})}
        />
        <CustomButton title="Sign Out" onPress={() => signOut()} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
