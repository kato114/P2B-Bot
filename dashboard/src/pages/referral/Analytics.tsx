import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HolderRewards from './shared/ReferralRewards'
import styles from './style.module.css'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function Referral () {
  return (
    <div className={styles['MainContent']}>
      <div className={styles['Instructions']}>
        <span className={styles['Title']}>
          Referral Rewards
        </span>
        <span className={styles['Details']}>
          Referral codes are written into every swap transaction and rewards data is processed directly from the blockchain. <br/>
          Enter the referral code's reward recipient address to check rewards. Rewards data updates every 20 minutes. <br/>
        </span>
      </div>

      <div className='grid grid-cols-4 pt-20 gap-10'>
        <div className='flex flex-col'>
          <span>Total Referrals</span>
          <span>--</span>
        </div>
        <div className='flex flex-col'>
          <span>Transactions</span>
          <span>--</span>
        </div>
        <div className='flex flex-col'>
          <span>Total Rewards</span>
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