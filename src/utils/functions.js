import {SwitchComponent} from 'react-native';
import {Colors} from '../theme/colors';

const setColors = index => {
  switch (index % 10) {
    case 0:
      return Colors.SOFTGRAY;

      break;

    case 1:
      return Colors.PURPLE;

      break;

    case 2:
      return Colors.SOMON;

      break;

    case 3:
      return Colors.GREEN;

      break;

    case 4:
      return Colors.COLOR5;

      break;

    default:
      return Colors.YELLOW;
      break;
  }
};

export {setColors};
