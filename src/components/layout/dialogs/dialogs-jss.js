import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import { BUTTON_PRIMARY } from '../../styling/styling';

const useStyles = createUseStyles({
  dialog: {
    '& .title': {
      color: colors.primary,
      fontWeight: '600'
    },
    '& .icon': {
      color: colors['text-gray-400'],
      fontSize: '22px'
    },
    '& .phone-number': {
      color: colors['text-gray-700'],
      fontSize: '22px',
      fontWeight: '600'
    },
    '& .button-primary': BUTTON_PRIMARY
  }
});

export default useStyles;
