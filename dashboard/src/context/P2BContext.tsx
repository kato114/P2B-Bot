import React, { createContext, useEffect, useState } from "react";

export const P2BContext = createContext({
  tradeVolume: 0,
  holderRewards: 0,
  totalHolders: 0,
  referredUsers: 0,
})

export const P2BContextProvider = ({children}: {children: React.ReactNode}) => {

  const [p2bState, setP2bState] = useState({
    tradeVolume: 0,
    holderRewards: 0,
    totalHolders: 0,
    referredUsers: 0,
  })

  useEffect(() => {
    setP2bState({
      tradeVolume: 0,
      holderRewards: 0,
      totalHolders: 0,
      referredUsers: 0,
    })
  }, [])

  return (
    <P2BContext.Provider value={p2bState}>
      {children}
    </P2BContext.Provider>
  )
}