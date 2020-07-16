import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import { BUTTON_PRIMARY, LINK_PRIMARY } from '../../styling/styling';

const useStyles = createUseStyles({
  navbar: {
    paddingTop: '20px',
    paddingBottom: '20px',
    '@media screen and (min-width: 992px)': {
      '& .button-primary': BUTTON_PRIMARY,
      '& .link-primary': LINK_PRIMARY,
    },
    '& .navbar-toggler': {
      color: colors['text-gray-600'],
      border: 0,
    },
    '& .message': {
      '& .icon': {
        color: colors['text-gray-500'],
        fontSize: '20px',
        '&:hover': {
          color: colors['text-gray-600'],
        },
      },
    },
    '& .dropdown-item': {
      '& .icon': {
        color: colors['text-gray-700'],
        minWidth: '20px',
      },
    },
    '& .dropdown': {
      '& .dropdown-toggle::after': {
        display: 'none',
      },
      '& .user-menu': {
        color: colors['text-gray-800'],
        '&:hover': {
          color: colors['text-gray-900'],
        },
      },
    },
    '& .logo': {
      height: '22px',
      marginBottom: '5px',
    },
  },
});

export default useStyles;
