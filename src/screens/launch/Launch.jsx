import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/notes/CustomButton';
import {SIGNIN, SIGNUP} from '../../utils/route';
import {Apple, Facebook, Google, Instagram} from 'iconsax-react-native';

const Launch = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{fontSize: 35, fontWeight: 'bold', color: Colors.DARKBLUE}}>
          Hello
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: Colors.GRAY,
            textAlign: 'center',
            margin: 18,
          }}>
          Welcome to NoteMap-App, where you manage your account
        </Text>
      </View>
      <View style={{flex: 3, marginVertical: 10, gap: 20}}>
        <CustomButton
          title="Sign In"
          onPress={() => navigation.navigate(SIGNIN)}
        />
        <CustomButton
          title="Sign Up"
          onPress={() => navigation.navigate(SIGNUP)}
        />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.GRAY,
            textAlign: 'center',
            margin: 5,
          }}>
          Sign Up Using
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Apple size="32" color={Colors.GRAY} variant="Bold" />
          <Facebook size="32" color={Colors.FACEBOOK} variant="Bold" />
          <Google size="32" color={Colors.GOOGLE} variant="Bold" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Launch;
