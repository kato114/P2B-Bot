import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faEthereum } from '@fortawesome/free-brands-svg-icons'

import { P2BContext } from '../../context/P2BContext'

import styles from './style.module.css'

export function Footer ({className}: {className: string}) {
  const {
    tradeVolume,
    holderRewards, 
    totalHolders, 
    referredUsers
  } = useContext(P2BContext);

  return (
    <div className={`${className} ${styles['Footer']}`}>
      <div className={styles['FooterItem']}>
        <span>Trade Volume</span>
        <span className='flex items-center gap-1'>
          {tradeVolume} ETH 
          <FontAwesomeIcon icon={faEthereum} fontSize={16}/>
        </span>
      </div>
      <div className={styles['FooterItem']}>
        <span>Holder Rewards</span>
        <span className='flex items-center gap-1'>
          {holderRewards} ETH 
          <FontAwesomeIcon icon={faEthereum} fontSize={16}/>
        </span>
      </div>
      <br/>
      <div className={styles['FooterItem']}>
        <span>Total Holders</span>
        <span>{totalHolders}</span>
      </div>
      <div className={styles['FooterItem']}>
        <span>Referred Users</span>
        <span>{referredUsers}</span>
      </div>
      <a className={styles['FooterContact']} href="#" target='_blank'>
        <span><FontAwesomeIcon icon={faTelegram} fontSize={16}/></span>
        <span >Join the Community</span>
      </a>
    </div>
  )
}