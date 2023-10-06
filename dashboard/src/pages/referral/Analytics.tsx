import React, { useRef, useState } from "react";
import { useAccount } from 'wagmi'
import Web3 from 'web3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import HolderRewards from './shared/ReferralRewards'
import styles from './style.module.css'

type Statistic = {
  total_reward: string;
  claimed_reward: string;
  unclaimed_reward: string;
};

export default function Referral() {
  const web3 = new Web3();
  const { address, isConnected } = useAccount()

  const [statistic, setStatistic] = useState<Statistic>({
    total_reward: '0',
    claimed_reward: '0',
    unclaimed_reward: '0',
  })

  const spanRef = useRef<HTMLSpanElement>(null);
  const handleCopy = () => {
    if (spanRef.current) {
      const range = document.createRange();
      range.selectNode(spanRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
    }
  };

  return (
    <div className={styles['MainContent']}>
      <div className={styles['Instructions']}>
        <span className={styles['Title']}>
          Referral Rewards
        </span>
        <span className={styles['Details']}>
          Referral codes are written into every swap transaction and rewards data is processed directly from the blockchain. <br />
          Enter the referral code's reward recipient address to check rewards. Rewards data updates every 20 minutes. <br />
        </span>
      </div>

      <div>
        <br />
        {isConnected ?
          <span className={styles['Details']} onClick={handleCopy} style={{ cursor: "pointer" }}>
            Referral link : {' '}
            <span className='text-green-600' ref={spanRef}>
              https://t.me/P2BHubBot?start={address}
            </span>
            {' '}{' '}{' '}
            <button>&#128203;</button>
          </span>
          : <span className={styles['Details']} style={{ color: 'darkred' }}>Connect wallet to see your referral link.</span>}
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
          <span>Claimed Rewards</span>
          <span>{parseFloat(Number(web3.utils.fromWei(statistic.claimed_reward)).toFixed(5))} ETH <FontAwesomeIcon icon={faEthereum} /></span>
        </div>
      </div>

      <div className={styles['Divider']} />

      <HolderRewards setStatistic={setStatistic} />
    </div>
  )
}