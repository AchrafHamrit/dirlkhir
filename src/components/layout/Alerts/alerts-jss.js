import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import { CARD_SHADOW } from '../../styling/styling';

const useStyles = createUseStyles({
  alert: {
    padding: '20px',
    marginBottom: '20px',
    '&.card-shadow': CARD_SHADOW,
    background: colors.danger,
    color: colors['text-white'],
    fontWeight: 500,
    '& .icon': {
      opacity: 0.7,
    },
  },
});

export default useStyles;
