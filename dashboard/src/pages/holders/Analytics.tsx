import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import axios from 'axios'
import Web3 from 'web3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import { API_URL } from '../../config'

import HolderRewards from './shared/HolderRewards'
import styles from './style.module.css'

type Statistic = {
  total_reward: string;
  claimed_reward: string;
  unclaimed_reward: string;
};

export default function Analytics() {
  const web3 = new Web3();
  const { address, isConnected } = useAccount()

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
  }, [isConnected])

  return (
    <div className={styles['MainContent']}>
      <div className={styles['Instructions']}>
        <span className={styles['Title']}>
          Holder Rewards
        </span>
        <span className={styles['Details']}>
          Holders receive 1% of token swap fees (2% for those who migrated on-time), 40% of transaction fees, and 25% of referral fees as rewards. <br />
          Rewards are proportional to the amount of Perpbot held. Rewards are calculated in 2 hour intervals. <br />
        </span>
      </div>

      <div className='grid grid-cols-3 pt-20 gap-10'>
        <div className='flex flex-col'>
          <span>Total Rewards</span>
          <span>{parseFloat(Number(web3.utils.fromWei(statistic.total_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
        </div>
        <div className='flex flex-col'>
          <span>Unclaimed Rewards</span>
          <span>{parseFloat(Number(web3.utils.fromWei(statistic.unclaimed_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
        </div>
        <div className='flex flex-col'>
          <span>Claimable Rewards</span>
          <span>{parseFloat(Number(web3.utils.fromWei(statistic.claimed_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
        </div>
      </div>

      <div className={styles['Divider']} />

      <HolderRewards />
    </div>
  )
}