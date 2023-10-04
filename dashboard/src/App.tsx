import { useRoutes } from 'react-router-dom'
import routes from './routes'
import styles from "./App.module.css"
import { P2BContextProvider } from './context/P2BContext';

function App() {
  const content = useRoutes(routes);

  return (
    <P2BContextProvider>
      <div className={styles['App']}>
        { content }
      </div>
    </P2BContextProvider>
  );
}

export default App;
