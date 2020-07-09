import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  '@keyframes sk-scaleout': {
    '0%': {
      transform: 'scale(0)',
    },
    '100%': {
      transform: 'scale(1.0)',
      opacity: 0,
    },
  },
  spinner: {
    width: '40px',
    height: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.primary,
    borderRadius: '100%',
    animation: '$sk-scaleout 1.0s infinite ease-in-out',
  },
});

export default useStyles;
