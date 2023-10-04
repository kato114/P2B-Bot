import Loadable from '../../components/Loadable';
import {
  lazy
} from 'react';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const holderRoutes = [{
  path: '/holders',
  element: <Analytics /> ,
}, ];

export default holderRoutes;