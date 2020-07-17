import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import {
  CARD_SHADOW,
  BUTTON_PRIMARY,
  BUTTON_PRIMARY_OUTLINE,
  INPUT_TEXT,
  BUTTON_LIGHT,
  SIDEBAR_TITLE,
  LINK_PRIMARY
} from '../../styling/styling';

const useStyles = createUseStyles({
  page: {
    padding: '40px 20px',
    marginBottom: '40px',
    '&.card-shadow': CARD_SHADOW,
    '&> .title': {
      color: colors.danger
    },
    '& .subtitle': {
      color: colors['text-gray-700'],
      fontWeight: '400'
    },

    '& .card-shadow': CARD_SHADOW,
    '& .search-form': {
      padding: '20px 20px',
      '& .input-text': {
        ...INPUT_TEXT,
        width: '100%'
      }
    },

    '& .button-primary': {
      ...BUTTON_PRIMARY,
      '&:hover': {
        background: colors['primary-fill-hover']
      }
    },
    '& .button-primary-outline': BUTTON_PRIMARY_OUTLINE,
    '& .button-light': BUTTON_LIGHT,

    '& .input-select': {
      height: 'auto',
      background: 'none'
    },
    '@media screen and (min-width: 992px)': {
      '& .collapse': { display: 'block' }
    },
    '& .sidebar-title': SIDEBAR_TITLE,
    '& .no-donors': {
      '& p': {
        color: colors['text-gray-500'],
        fontWeight: '400'
      }
    },
    '& .link-primary': LINK_PRIMARY,

    '& .postitem': {
      '& .circle': {
        background: colors.danger,
        borderRadius: '200px',
        color: 'white',
        height: '60px',
        width: '60px',
        fontWeight: 600,
        display: 'table',
        '& p': {
          verticalAlign: 'middle',
          display: 'table-cell',
          fontSize: '20px'
        }
      },
      '& .name': {
        fontWeight: 600,
        fontSize: '18px',
        color: colors['text-gray-700']
      },
      '& .details': {
        fontSize: '16px',
        color: colors['text-gray-600'],
        '& .strong': {
          fontWeight: 600
        }
      }
    }
  }
});

export default useStyles;
