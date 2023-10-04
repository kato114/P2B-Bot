import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClaimedRewards from './shared/ClaimedRewards'
import HolderRewards from './shared/HolderRewards'
import TokenHolding from './shared/TokenHolding'
import styles from './style.module.css'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function Dashboard () {
  return (
    <div className={styles['MainContent']}>
      <div className={styles['Instructions']}>
        <span className={styles['Title']}>
          Revenue Share Dashboard
        </span>
        <span className={styles['Details']}>
          Holders can connect using this dashboard to view and claim their revenue share rewards. <br/>
          A minimum balance of 10 Perpbot is required. Claiming rewards claims all available unclaimed rewards and requires a minimum of 0.1 ETH accumulated.  <br/>
          To lookup revenue shares for other wallets, use the Holder Rewards or Referral Rewards browser. <br/>
        </span>
      </div>
      <div className={styles['Forfeiture']}>
        <span className={styles['Title']}>
          Rewards Forfeiture
        </span>
        <span className={styles['Details']}>
          You can sell or transfer up to 200 Perpbot every reward epoch (2 hours) without penalty.  <br/>
          If you exceed this amount, all unclaimed rewards will be forfeited back into the rewards pool.  <br/>
          This does not apply to referral rewards. <br/>
        </span>
      </div>

      <div className='grid grid-cols-2 w-full mt-10'>
        <div className='flex flex-col gap-10'>
          <TokenHolding/>
          <ClaimedRewards/>
        </div>
        <div className='flex flex-col justify-end'>
          <span className='w-full text-end'>
            Your Rewards History
          </span>

          <div className='grid grid-cols-3 pt-10 gap-10 text-[14px]'>
            <div className='flex flex-col justify-end'>
              <span className='text-end'>Total Rewards</span>
              <span className='text-end'>0 ETH <FontAwesomeIcon icon={faEthereum}/></span>
            </div>
            <div className='flex flex-col'>
              <span className='text-end'>Unclaimed Rewards</span>
              <span className='text-end'>0 ETH <FontAwesomeIcon icon={faEthereum}/></span>
            </div>
            <div className='flex flex-col'>
              <span className='text-end'>Claimable Rewards</span>
              <span className='text-end'>0 ETH <FontAwesomeIcon icon={faEthereum}/></span>
            </div>
          </div>

        </div>
      </div>

      <div className={styles['Divider']}/>

      <HolderRewards />
    </div>
  )
}