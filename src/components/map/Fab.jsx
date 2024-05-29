import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Fab = props => {
  const {icon, customStyle} = props;
  return (
    <TouchableOpacity {...props} style={[styles.container, customStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 999,
    right: 20,
    borderRadius: 100,
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },
});

// import Svg, {Path} from 'react-native-svg';
// const HomeIcon = ({width, height, fill}) => {
//   return (
//     <Svg width={width} height={height} viewBox="0 0 30 30" fill='none'>
//       <Path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M4.6875 11.4843C5.20527 11.4843 5.625 11.904 5.625 12.4218V26.2499H10.3125V19.2187C10.3125 18.5971 10.5594 18.0009 10.999 17.5614C11.4385 17.1218 12.0346 16.8749 12.6563 16.8749H17.3438C17.9654 16.8749 18.5615 17.1218 19.001 17.5614C19.4406 18.0009 19.6875 18.5971 19.6875 19.2187V26.2499H24.375V12.4218C24.375 11.904 24.7947 11.4843 25.3125 11.4843C25.8303 11.4843 26.25 11.904 26.25 12.4218V26.2499C26.25 26.7472 26.0525 27.2241 25.7008 27.5757C25.3492 27.9274 24.8723 28.1249 24.375 28.1249H18.75C18.2322 28.1249 17.8125 27.7052 17.8125 27.1874V19.2187C17.8125 19.0943 17.7631 18.9751 17.6752 18.8872C17.5873 18.7993 17.4681 18.7499 17.3438 18.7499H12.6563C12.5319 18.7499 12.4127 18.7993 12.3248 18.8872C12.2369 18.9751 12.1875 19.0943 12.1875 19.2187V27.1874C12.1875 27.7052 11.7678 28.1249 11.25 28.1249H5.625C5.12772 28.1249 4.65081 27.9274 4.29918 27.5757C3.94754 27.2241 3.75 26.7472 3.75 26.2499V12.4218C3.75 11.904 4.16973 11.4843 4.6875 11.4843Z"
//         fill={fill}
//       />
//       <Path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M16.2991 2.38181L28.7733 14.3227C29.1473 14.6808 29.1603 15.2742 28.8022 15.6482C28.4442 16.0223 27.8507 16.0352 27.4767 15.6772L15.0188 3.7518C15.0131 3.75129 15.0069 3.75099 15.0003 3.75098C14.9935 3.75096 14.9871 3.75126 14.9812 3.75178L2.52328 15.6772C2.14926 16.0352 1.55581 16.0223 1.19777 15.6482C0.839737 15.2742 0.852698 14.6808 1.22672 14.3227L13.7017 2.38104C14.0841 1.99333 14.6053 1.87527 15.0037 1.87598C15.4004 1.87669 15.9197 1.99572 16.2991 2.38181Z"
//         fill={fill}
//       />
//       <Path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M19.6875 3.74991C19.6875 3.23214 20.1072 2.81241 20.625 2.81241H23.4375C23.9553 2.81241 24.375 3.23214 24.375 3.74991V10.4882C24.375 11.006 23.9553 11.4257 23.4375 11.4257C22.9197 11.4257 22.5 11.006 22.5 10.4882V4.68741H21.5625V7.79288C21.5625 8.31064 21.1428 8.73038 20.625 8.73038C20.1072 8.73038 19.6875 8.31064 19.6875 7.79288V3.74991Z"
//         fill={fill}
//       />
//     </Svg>
//   );
// };
// export default HomeIcon;

// <Tab.Screen
//           name={homeScreen}
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({color, size, props}) => (
//               <HomeIcon width={25} height={25} fill={color} />
//             ),
//           }}
//         />

// 6:18
