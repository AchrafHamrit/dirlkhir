import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import {
  CARD_SHADOW,
  BUTTON_PRIMARY,
  BUTTON_PRIMARY_OUTLINE,
  INPUT_TEXT,
  BUTTON_LIGHT,
  BUTTON_GRAY,
  LINK_PRIMARY,
} from '../../styling/styling';

const useStyles = createUseStyles({
  page: {
    padding: '40px 20px',
    marginBottom: '40px',
    '&.card-shadow': CARD_SHADOW,
    '&> .title': {
      color: colors.primary,
    },
    '& .subtitle': {
      color: colors['text-gray-700'],
      fontWeight: '400',
    },

    '& .button-primary': {
      ...BUTTON_PRIMARY,
      '&:hover': {
        background: colors['primary-fill-hover'],
      },
    },
    '& .button-primary-outline': BUTTON_PRIMARY_OUTLINE,
    '& .button-light': BUTTON_LIGHT,
    '& .button-gray': BUTTON_GRAY,

    '& .input-select': {
      height: 'auto',
      background: 'none',
    },

    '& .link-primary': LINK_PRIMARY,
    '& .section': {
      '& .title': {
        fontSize: '18px',
        color: colors.primary,
      },
      '& form': {
        '& .input-text': {
          ...INPUT_TEXT,
          width: '100%',
        },
      },
    },
  },
});

export default useStyles;
