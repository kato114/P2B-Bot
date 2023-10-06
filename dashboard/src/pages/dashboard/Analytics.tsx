import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import axios from 'axios'
import Web3 from 'web3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import { API_URL } from '../../config'

import ClaimedRewards from './shared/ClaimedRewards'
import HolderRewards from './shared/HolderRewards'
import TokenHolding from './shared/TokenHolding'

import styles from './style.module.css'

type Statistic = {
  total_reward: string;
  claimed_reward: string;
  unclaimed_reward: string;
};


export default function Dashboard() {
  const web3 = new Web3();
  const { address, isConnected } = useAccount()

  const [refresh, setRefresh] = useState(false);
  const [statistic, setStatistic] = useState<Statistic>({
    total_reward: '0',
    claimed_reward: '0',
    unclaimed_reward: '0',
  })

  useEffect(() => {
    const getStatistic = async () => {
      if (isConnected) {
        let { data } = await axios.get(API_URL + "/statistic/" + address);

        setStatistic(data.data)
      }
    }

    getStatistic();
  }, [isConnected, refresh])

  return (
    <div className={styles['MainContent']}>
      <div className={styles['Instructions']}>
        <span className={styles['Title']}>
          Revenue Share Dashboard
        </span>
        <span className={styles['Details']}>
          Holders can connect using this dashboard to view and claim their revenue share rewards. <br />
          A minimum balance of 500 Perpbot is required. Claiming rewards claims all available unclaimed rewards.
          {/* <br />
          To lookup revenue shares for other wallets, use the Holder Rewards or Referral Rewards browser. <br /> */}
        </span>
      </div>
      <div className={styles['Forfeiture']}>
        <span className={styles['Title']}>
          Rewards Forfeiture
        </span>
        <span className={styles['Details']}>
          You can sell or transfer up to 200 Perpbot every reward epoch (2 hours) without penalty.  <br />
          If you exceed this amount, all unclaimed rewards will be forfeited back into the rewards pool.  <br />
          This does not apply to referral rewards. <br />
        </span>
      </div>

      <div className='grid grid-cols-2 w-full mt-10'>
        <div className='flex flex-col gap-10'>
          {/* <TokenHolding/> */}
          <ClaimedRewards refresh={refresh} setRefresh={setRefresh} />
        </div>
        <div className='flex flex-col justify-end'>
          <span className='w-full text-end'>
            Your Rewards History
          </span>

          <div className='grid grid-cols-3 pt-10 gap-10 text-[14px]'>
            <div className='flex flex-col justify-end'>
              <span className='text-end'>Total Rewards</span>
              <span className='text-end'>{parseFloat(Number(web3.utils.fromWei(statistic.total_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
            </div>
            <div className='flex flex-col'>
              <span className='text-end'>Unclaimed Rewards</span>
              <span className='text-end'>{parseFloat(Number(web3.utils.fromWei(statistic.unclaimed_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
            </div>
            <div className='flex flex-col'>
              <span className='text-end'>Claimed Rewards</span>
              <span className='text-end'>{parseFloat(Number(web3.utils.fromWei(statistic.claimed_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['Divider']} />

      <HolderRewards refresh={refresh} />
    </div>
  )
}