import { createUseStyles } from 'react-jss';
import colors from '../styling/colors';
import { CARD_SHADOW, BUTTON_PRIMARY, INPUT_TEXT } from '../styling/styling';

const useStyles = createUseStyles({
  root: {
    padding: '40px 20px',
    marginBottom: '40px',
    '&.card-shadow': CARD_SHADOW,
    '& .title': {
      color: colors.primary,
    },
    '& .subtitle': {
      color: colors['text-gray-700'],
      fontWeight: '400',
    },
    '& .button-primary': BUTTON_PRIMARY,
    '& .input-text': INPUT_TEXT,
    '& .form-link': {
      '& a': {
        color: colors['text-gray-700'],
        '& span': {
          fontWeight: 500,
        },
      },
    },
  },
});

export default useStyles;
