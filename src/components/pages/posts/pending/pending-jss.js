import { createUseStyles } from 'react-jss';
import colors from '../../../styling/colors';
import { CARD_SHADOW, LINK_PRIMARY } from '../../../styling/styling';

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
    '& .table': {
      '& .link-primary': LINK_PRIMARY,
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
});

export default useStyles;
