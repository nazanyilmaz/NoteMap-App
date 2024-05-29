import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {LocationAdd, Map1} from 'iconsax-react-native';
import Fab from '../../components/map/Fab';
import CustomMarker from '../../components/map/CustomMarker';
import CustomCallout from '../../components/map/CustomCallout';
import {ADDPLACE, COORDINATE, DETAIL} from '../../utils/route';
import {Colors} from '../../theme/colors';

const Coordinate = ({navigation}) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [coordinate, setCoordinate] = useState(null);

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

  const handleCoordinate = e => {
    setCoordinate(e.nativeEvent.coordinate);
    //console.warn(e.nativeEvent.coordinate);
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      <Fab
        onPress={() => navigation.navigate(ADDPLACE, {coordinate: coordinate})}
        icon={<LocationAdd size={50} color="#fff" />}
        customStyle={{backgroundColor: Colors.DARKBLUE, top: 830}}
      />
      <MapView
        //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        onPress={handleCoordinate}
        zoomControlEnabled
        style={styles.map}
        region={{
          latitude: 40.094758, //currentPosition?.latitude
          longitude: -75.381481, //currentPosition?.longitude
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}>
        <Marker
          title="I am here"
          coordinate={{
            latitude: 40.094758, //currentPosition?.latitude
            longitude: -75.381481, //currentPosition?.longitude
            latitudeDelta: 40,
            longitudeDelta: 40,
          }}
        />
        {coordinate && (
          <Marker
            coordinate={{
              latitude: coordinate?.latitude,
              longitude: coordinate?.longitude,
              latitudeDelta: 40,
              longitudeDelta: 40,
            }}
          />
        )}
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
export default Coordinate;
