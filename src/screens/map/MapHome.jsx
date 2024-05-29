import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import {LocationAdd, Map1} from 'iconsax-react-native';
import Fab from '../../components/map/Fab';
import CustomMarker from '../../components/map/CustomMarker';
import CustomCallout from '../../components/map/CustomCallout';
import {COORDINATE, DETAIL} from '../../utils/route';
import {Colors} from '../../theme/colors';

const MapHome = ({navigation}) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [mapType, setMapType] = useState('standart');
  const [location, setLocation] = useState([]);

  const changeMapType = () => {
    if (mapType === 'standart') setMapType('satellite');
    else {
      setMapType('standart');
    }
  };

  const getLocation = async () => {
    await firestore()
      .collection('Location')
      .get()
      .then(querySnapshot => {
        const fetchedLocation = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedLocation.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
            coordinate: documentSnapshot.data().coordinate,
          });
        });
        setLocation(fetchedLocation);
      });
  };

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        //console.log(pos); // current position yazdirir
        setCurrentPosition(pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccurary: true},
    );
  };

  useEffect(() => {
    SplashScreen.hide();
    getLocation();
    getCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      <Fab
        icon={
          <Map1
            size={36}
            color="#fff"
            variant={mapType == 'standart' ? 'Outline' : 'Bold'}
          />
        }
        customStyle={{right: 15, top: 65, backgroundColor: Colors.DARKBLUE}}
        onPress={() => changeMapType()}
      />
      <Fab
        onPress={() => navigation.navigate(COORDINATE)}
        icon={<LocationAdd size={50} color="#fff" />}
        customStyle={{backgroundColor: Colors.DARKBLUE, top: 780}}
      />
      <MapView
        //provider={PROVIDER_GOOGLE} // remove if not using Google Maps

        mapType={mapType}
        style={styles.map}
        region={{
          latitude: 40.094758, //currentPosition?.latitude
          longitude: -75.381481, //currentPosition?.longitude
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}>
        {location.map((marker, index) => (
          <Marker
            draggable
            key={index}
            title={marker.title}
            description={marker.description}
            coordinate={marker.coordinate}>
            <CustomMarker />
            <Callout
              onPress={() => navigation.navigate(DETAIL, {item: marker})}>
              <CustomCallout
                title={marker.title}
                description={marker.description}
              />
            </Callout>
          </Marker>
        ))}
        <Marker
          title="I am here"
          coordinate={{
            latitude: 40.094758, //currentPosition?.latitude
            longitude: -75.381481, //currentPosition?.longitude
            latitudeDelta: 40,
            longitudeDelta: 40,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapHome;
