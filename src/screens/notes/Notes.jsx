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

const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [pending, setPending] = useState(false);

  const getNotes = async () => {
    await firestore()
      .collection('Notes')
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
        setNotes(fethedNotes);
      });
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={pending} onRefresh={getNotes} />
            }
            ListHeaderComponent={<Header />}
            data={notes}
            renderItem={({item, index}) => (
              <NoteCard note={item} index={index} />
            )}
            keyExtractor={item => item.id}
          />
          <Fab
            onPress={() => navigation.navigate(ADDNOTE)}
            icon={<Add size={50} color="#fff" />}
            customStyle={{backgroundColor: Colors.DARKBLUE, top: 780}}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Notes;
