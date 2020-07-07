import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import { BUTTON_PRIMARY } from '../../styling/styling';

const useStyles = createUseStyles({
  page: {
    padding: '40px 20px',
    marginBottom: '40px',
    '&> .title': {
      color: colors['text-gray-800'],
      fontWeight: '700',
      '&> span': {
        color: colors.primary,
      },
    },
    '& .paragraph': {
      color: colors['text-gray-600'],
      fontWeight: '500',
      maxWidth: '480px',
    },

    '& .button-primary': {
      ...BUTTON_PRIMARY,
      borderRadius: '22px',
      padding: '10px 30px',
    },
  },
});

export default useStyles;
