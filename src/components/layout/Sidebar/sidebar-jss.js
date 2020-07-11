import { createUseStyles } from 'react-jss';
import { SIDEBAR_TITLE } from '../../styling/styling';

const useStyles = createUseStyles({
  sidebar: {
    '& .sidebar-title': SIDEBAR_TITLE,
  },
});

export default useStyles;
