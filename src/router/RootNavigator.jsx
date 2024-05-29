import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {
  ADDNOTE,
  ADDPLACE,
  COORDINATE,
  DETAIL,
  LAUNCH,
  PROFILEUPDATE,
  SIGNIN,
  SIGNUP,
  TAB,
  UPDATENOTE,
} from '../utils/route';
import Geolocation from '@react-native-community/geolocation';
import MapDetail from '../screens/detail/MapDetail';
import AddNote from '../screens/notes/AddNote';
import UpdateNote from '../screens/notes/UpdateNote';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import Launch from '../screens/launch/Launch';
import TabNavigator from './TabNavigator';
import Coordinate from '../screens/map/Coordinate';
import AddPlace from '../screens/map/AddPlace';
import ProfileUpdate from '../screens/profile/ProfileUpdate';

const Stack = createNativeStackNavigator();

Geolocation.setRNConfiguration({
  config: {
    skipPermissionRequests: false,
    authorizationLevel: 'always' | 'whenInUse' | 'auto',
    // enableBackgroundLocationUpdates: boolean,
    //locationProvider: 'playServices' | 'android' | 'auto',
  },
});

function RootNaviagtor() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      {!user ? (
        <Stack.Group>
          <Stack.Screen
            name={LAUNCH}
            component={Launch}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SIGNIN}
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SIGNUP}
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name={TAB}
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name={ADDNOTE} component={AddNote} />
          <Stack.Screen name={UPDATENOTE} component={UpdateNote} />

          <Stack.Screen
            name={DETAIL}
            component={MapDetail}
            //options={{headerShown: false}}
          />
          <Stack.Screen
            name={COORDINATE}
            component={Coordinate}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ADDPLACE}
            component={AddPlace}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={PROFILEUPDATE}
            component={ProfileUpdate}
            options={{headerShown: false}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default RootNaviagtor;
