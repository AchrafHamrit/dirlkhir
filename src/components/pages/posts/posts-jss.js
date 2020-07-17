import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import {
  CARD_SHADOW,
  BUTTON_PRIMARY,
  BUTTON_TRANSPARENT,
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

    '& .button-primary': BUTTON_PRIMARY,
    '& .button-light': BUTTON_LIGHT,
    '& .button-transparent': BUTTON_TRANSPARENT,

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
      '& .description': {
        maxWidth: '700px',
        fontWeight: 400,
        color: colors['text-gray-700'],
        '& .subtitle': {
          fontWeight: 600,
        },
      },
      '& .date': {
        fontSize: '.9rem',
        fontWeight: 500,
        color: colors['text-gray-500'],
      },
      '& .pictures': {
        '& img': {
          cursor: 'pointer',
        },
      },
      '& .contact-details': {
        '& .icon': {
          color: colors['text-gray-700'],
          fontSize: '28px',
        },
        '& .title': {
          fontWeight: 600,
          color: colors['text-gray-700'],
        },
      },
      '& .button-primary, & .button-transparent': {
        padding: '15px 30px !important',
        borderRadius: '18px',
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
        minWidth: '750px',
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
