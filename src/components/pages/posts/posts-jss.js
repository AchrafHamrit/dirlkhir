import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import {
  CARD_SHADOW,
  BUTTON_PRIMARY,
  BUTTON_PRIMARY_OUTLINE,
  INPUT_TEXT,
  BUTTON_LIGHT,
  POSTITEM_CARD,
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

    '& .card-shadow': CARD_SHADOW,
    '& .search-form': {
      padding: '20px 20px',
      '& .input-text': {
        ...INPUT_TEXT,
        width: '100%',
      },
    },

    '& .button-primary': {
      ...BUTTON_PRIMARY,
      '&:hover': {
        background: colors['primary-fill-hover'],
      },
    },
    '& .button-primary-outline': BUTTON_PRIMARY_OUTLINE,
    '& .button-light': BUTTON_LIGHT,

    '& .input-select': {
      height: 'auto',
      background: 'none',
    },
    '@media screen and (min-width: 992px)': {
      '& .collapse': { display: 'block' },
    },
    '& .postitem-card': {
      ...POSTITEM_CARD,
      '& .postitem-details-top': {
        '& h5.title': {
          color: colors['text-gray-800'],
        },
        '& p.description': {
          color: colors['text-gray-600'],
          fontWeight: 500,
          fontSize: '15px',
        },
      },
      '& .postitem-details-bottom': {
        '& p.location': {
          color: colors['text-gray-700'],
          fontWeight: 500,
          fontSize: '15px',
        },
        '& p.date': {
          color: colors['text-gray-600'],
          fontSize: '15px',
        },
      },
    },
    '& .no-requests': {
      '& p': {
        color: colors['text-gray-500'],
        fontWeight: '400',
      },
    },
    '& .link-primary': LINK_PRIMARY,
    '& .post-content': {
      '& .title': {
        fontWeight: 600,
        color: colors.primary,
        '& .status': {
          fontWeight: 500,
          fontSize: '15px',
          color: colors['text-gray-900'],
        },
      },
      '& .details, .description, .pictures': {
        '& .subtitle': {
          fontWeight: 600,
          '& .icon': {
            color: colors['text-gray-400'],
            minWidth: '20px',
          },
        },
        '& p': {
          fontWeight: 500,
          color: colors['text-gray-500'],
          '& .value': {
            color: colors['text-gray-700'],
          },
        },
      },
      '& .contact-details': {
        padding: '40px 20px',
        '& .icon': {
          color: colors['text-gray-700'],
          fontSize: '28px',
        },
      },
      '& .button-primary': {
        ...BUTTON_PRIMARY,
        border: `2px solid ${colors.primary}`,
        '&:hover': {
          background: colors['primary-fill-hover'],
          borderColor: colors['primary-fill-hover'],
        },
      },
    },
    '& .add-form': {
      '& .input-text': {
        ...INPUT_TEXT,
        width: '100%',
      },
    },
    '&.user-posts': {
      '& .table': {
        '& thead th': {
          fontWeight: '600',
          fontSize: '15px',
        },
        '& .type': {
          fontWeight: '600',
          fontSize: '14px',
          padding: '2px 5px',
          borderRadius: '5px',
          color: colors['text-white'],
          '&.donation': {
            background: colors['primary-fill'],
          },
          '&.request': {
            background: colors.request,
          },
        },
        '& .actions': {
          '& .icon': {
            fontSize: '18px',
            '&.icon-decline': {
              color: colors.danger,
            },
          },
        },
      },
    },
  },
});

export default useStyles;
