//import liraries
import React from 'react';
import {Heart, Map, Profile, Notepad2} from 'iconsax-react-native';
import {FAVORITE, HOME, NOTES, PROFILE} from '../utils/route';
// create a component
const TabIcon = ({name, focused, color, size}) => {
  if (name === HOME) {
    return (
      <Map color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
    );
  } else if (name === PROFILE) {
    return (
      <Profile
        color={color}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  } else if (name === FAVORITE) {
    return (
      <Heart color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
    );
  } else if (name === NOTES) {
    return (
      <Notepad2
        color={color}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  }
};

export default TabIcon;
