import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StyledEngineProvider>
);
serviceWorker.unregister();