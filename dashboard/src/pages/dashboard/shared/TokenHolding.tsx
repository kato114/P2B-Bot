import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import styles from '../style.module.css'
import { useState } from 'react'

export default function TokenHolding() {

  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <span>Token Holdings</span>
        <button className={styles['Button']}>
          Claim Perpbot
          {loading && <FontAwesomeIcon className='animate-spin' icon={faCircleNotch}/>}
        </button>
      </div>

      <div className='flex flex-col'>
        <span>Wallet --</span>
        <span>Auto Compound --</span>
      </div>

      <small>Both wallet and auto-compound holdings are used to calculate your share of rewards</small>
    </div>
  )
}