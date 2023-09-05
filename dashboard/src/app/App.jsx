import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import { SettingsProvider } from './contexts/SettingsContext';
import { Store } from './redux/Store';
import routes from './routes';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'a9680cd05c410ced5a6621e943754fc8'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const App = () => {
  const content = useRoutes(routes);

  return (
    <Provider store={Store}>
      <SettingsProvider>
        <MatxTheme>
          {/* <WagmiConfig config={wagmiConfig}> */}
            {content}
          {/* </WagmiConfig> */}
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </MatxTheme>
      </SettingsProvider>
    </Provider>
  );
};

export default App;
