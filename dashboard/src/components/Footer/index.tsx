import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import axios from 'axios'
import Web3 from 'web3'

import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faEthereum } from '@fortawesome/free-brands-svg-icons'

import { P2BContext } from '../../context/P2BContext'

import { API_URL } from '../../config'

import styles from './style.module.css'

type Alaysis = {
  holder_count: string,
  total_reward: string,
  total_claimed_reward: string,
  total_unclaimed_reward: string
};

export function Footer({ className }: { className: string }) {
  const {
    tradeVolume,
    holderRewards,
    totalHolders,
    referredUsers
  } = useContext(P2BContext);


  const [alaysis, setAlaysis] = useState<Alaysis>({
    holder_count: '0',
    total_reward: '0',
    total_claimed_reward: '0',
    total_unclaimed_reward: '0'
  })

  const web3 = new Web3();

  useEffect(() => {
    const getData = async () => {
      let { data } = await axios.get(API_URL + "/analysis");

      setAlaysis(data.data)
    }
    getData();
  }, [])

  return (
    <div className={`${className} ${styles['Footer']}`}>
      <div className={styles['FooterItem']}>
        <span>Total Rewards</span>
        <span className='flex items-center gap-1'>
          {parseFloat(Number(web3.utils.fromWei(alaysis.total_reward)).toFixed(5))} ETH
          <FontAwesomeIcon icon={faEthereum} fontSize={16} />
        </span>
      </div>
      <div className={styles['FooterItem']}>
        <span>Claimed Rewards</span>
        <span className='flex items-center gap-1'>
          {parseFloat(Number(web3.utils.fromWei(alaysis.total_claimed_reward)).toFixed(5))} ETH
          <FontAwesomeIcon icon={faEthereum} fontSize={16} />
        </span>
      </div>
      <div className={styles['FooterItem']}>
        <span>Pending Rewards</span>
        <span className='flex items-center gap-1'>
          {parseFloat(Number(web3.utils.fromWei(alaysis.total_unclaimed_reward)).toFixed(5))} ETH
          <FontAwesomeIcon icon={faEthereum} fontSize={16} />
        </span>
      </div>
      <br />
      <div className={styles['FooterItem']}>
        <span>Total Holders</span>
        <span>{alaysis.holder_count}</span>
      </div>
      <div className={styles['FooterItem']}>
        <span>Referred Users</span>
        <span>{referredUsers}</span>
      </div>
      <a className={styles['FooterContact']} href="#" target='_blank'>
        <span><FontAwesomeIcon icon={faTelegram} fontSize={16} /></span>
        <span >Join the Community</span>
      </a>
    </div>
  )
}