import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HolderRewards from './shared/HolderRewards'
import styles from './style.module.css'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function Analytics() {
  return (
    <div className={styles['MainContent']}>
      <div className={styles['Instructions']}>
        <span className={styles['Title']}>
          Holder Rewards
        </span>
        <span className={styles['Details']}>
          Holders receive 1% of token swap fees (2% for those who migrated on-time), 40% of transaction fees, and 25% of referral fees as rewards. <br/>
          Rewards are proportional to the amount of Perpbot held. Rewards are calculated in 2 hour intervals and are claimable after 24 hours. <br/>
        </span>
      </div>

      <div className='grid grid-cols-3 pt-20 gap-10'>
        <div className='flex flex-col'>
          <span>Total Rewards</span>
          <span>0 ETH <FontAwesomeIcon icon={faEthereum}/></span>
        </div>
        <div className='flex flex-col'>
          <span>Unclaimed Rewards</span>
          <span>0 ETH <FontAwesomeIcon icon={faEthereum}/></span>
        </div>
        <div className='flex flex-col'>
          <span>Claimable Rewards</span>
          <span>0 ETH <FontAwesomeIcon icon={faEthereum}/></span>
        </div>
      </div>

      <div className={styles['Divider']}/>

      <HolderRewards />
    </div>
  )
}