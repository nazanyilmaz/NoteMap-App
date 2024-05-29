import {FlatList, RefreshControl, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Fab from '../../components/map/Fab';
import {Add} from 'iconsax-react-native';
import NoteCard from '../../components/notes/NoteCard';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/notes/Header';
import {ADDNOTE} from '../../utils/route';
import LoadingModal from '../../components/LoadingModal';
import {Colors} from '../../theme/colors';
import FavoriteCard from '../../components/FavoriteCard';

const Favorite = ({navigation}) => {
  const [favorite, setFavorite] = useState([]);
  const [pending, setPending] = useState(false);

  const getFavorite = async () => {
    await firestore()
      .collection('Favorite')
      .get()
      .then(querySnapshot => {
        const fethedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          fethedNotes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
          });
        });
        setFavorite(fethedNotes);
      });
  };
  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={pending} onRefresh={getFavorite} />
            }
            data={favorite}
            renderItem={({item, index}) => (
              <FavoriteCard favorite={item} index={index} />
            )}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Favorite;
