import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

import { useRoutes } from 'react-router-dom'
import routes from './routes'
import styles from "./App.module.css"
import { P2BContextProvider } from './context/P2BContext';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

function App() {
  const content = useRoutes(routes);

  return (
    <WagmiConfig config={config}>
      <P2BContextProvider>
        <div className={styles['App']}>
          {content}
        </div>
      </P2BContextProvider>
    </WagmiConfig>
  );
}

export default App;
