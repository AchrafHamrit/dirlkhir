import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  footer: {
    marginBottom: '30px',
    '& .social': {
      '& .icon': {
        color: colors['text-gray-500'],
        fontSize: '28px',
        '&:hover': {
          color: colors['text-gray-600'],
        },
      },
    },
    '& .message': {
      maxWidth: '680px',
      color: colors['text-gray-600'],
    },
    '& .Copyright': {
      color: colors['text-gray-700'],
      fontWeight: 500,
    },
  },
});

export default useStyles;
