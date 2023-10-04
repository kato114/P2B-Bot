import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Connect = () => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        <button onClick={() => disconnect()}>{address?.substring(0, 6)}....{address?.substring(38)}</button>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}

export default Connect;
