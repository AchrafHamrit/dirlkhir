import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import {
  CARD_SHADOW,
  BUTTON_PRIMARY,
  INPUT_TEXT,
  SIDEBAR_TITLE,
  POSTITEM_CARD,
  LINK_PRIMARY
} from '../../styling/styling';

const useStyles = createUseStyles({
  page: {
    padding: '40px 20px',
    marginBottom: '40px',
    '&.card-shadow': CARD_SHADOW,
    '&> .title': {
      color: colors.primary
    },
    '& .subtitle': {
      color: colors['text-gray-700'],
      fontWeight: '400'
    },

    '& .card-shadow': CARD_SHADOW,
    '& .sidebar-title': SIDEBAR_TITLE,
    '& .messageitem': {
      ...POSTITEM_CARD,
      '& .icon': {
        fontSize: '36px',
        color: colors['text-gray-700']
      },
      '& .user': {
        fontWeight: '600',
        color: colors['text-gray-700']
      },
      '& .message': {
        color: colors['text-gray-700']
      },
      '& .message-date': {
        fontWeight: '500',
        fontSize: '14px',
        color: colors['text-gray-500']
      },
      '& .unread-icon': {
        fontSize: '10px',
        color: colors.danger
      }
    },
    '& .link-primary': LINK_PRIMARY,
    '& .conversation-messages': {
      '& .other-user-details': {
        '& .icon': {
          fontSize: '36px',
          color: colors['text-gray-700']
        },
        '& .username': {
          fontWeight: '600',
          color: colors['text-gray-700']
        }
      },
      '& .messages': {
        '& .message': {
          marginBottom: '1rem'
        },
        '& .message-left': {
          justifyContent: 'flex-start',
          display: 'flex',
          textAlign: 'left',
          '& .content': {
            background: colors['text-gray-100']
          }
        },
        '& .message-right': {
          justifyContent: 'flex-end',
          display: 'flex',
          textAlign: 'right',
          '& .content': {
            background: colors.primary,
            color: colors['text-white']
          }
        },
        '& .content': {
          padding: '.5rem 1rem',
          marginBottom: '.25rem',
          borderRadius: '12px',
          fontWeight: '500',
          maxWidth: '380px'
        },
        '& .date': {
          padding: '0 1rem',
          fontWeight: 500,
          fontSize: '14px'
        },
        '& .icon': {
          fontSize: '28px',
          color: colors['text-gray-700']
        }
      }
    },
    '& .message-form': {
      '& .message-input': {
        ...INPUT_TEXT
      },
      '& .button-primary': BUTTON_PRIMARY
    }
  }
});

export default useStyles;
