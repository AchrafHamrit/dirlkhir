import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  page: {
    padding: '40px 20px',
    marginBottom: '40px',
    '& h1.title': {
      color: colors['text-gray-800'],
      fontWeight: '700',
      fontSize: '3rem',
      maxWidth: '450px',
    },
    '@media screen and (max-width: 576px)': {
      '& h1.title': {
        fontSize: '2rem',
      },
    },
    '& .paragraph': {
      color: colors['text-gray-600'],
      fontWeight: '500',
      maxWidth: '500px',
      fontSize: '1.3rem',
      '& span': {
        fontWeight: '700',
        color: colors['text-gray-700'],
      },
    },

    '& h3.title': {
      color: colors['text-gray-800'],
      fontWeight: '500',
      maxWidth: '250px',
      position: 'relative',
      '& .brand': {
        fontWeight: '700',
      },
    },
    '@media screen and (min-width: 575.98px)': {
      '& h3.title': {
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 13,
          right: -70,
          width: '50px',
          display: 'inline',
          borderTop: `3px solid ${colors['text-gray-400']}`,
        },
      },
    },

    '& .features': {
      '& .title': {
        color: colors['text-gray-800'],
        fontWeight: '600',
      },
      '& .description': {
        color: colors['text-gray-600'],
        fontWeight: '400',
        maxWidth: '300px',
      },
    },
  },
});

export default useStyles;
