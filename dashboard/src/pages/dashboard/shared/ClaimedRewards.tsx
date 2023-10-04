import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import axios from 'axios'
import Web3 from 'web3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import { API_URL } from '../../../config'

import styles from '../style.module.css'

type Reward = {
  reward: string;
  txn: string;
  status: number;
  updated_date: string;
};

type ClaimedRewardsProps = {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const ClaimedRewards: React.FC<ClaimedRewardsProps> = ({ refresh, setRefresh }) => {

  const web3 = new Web3();

  const { address, isConnected } = useAccount()
  const [loading, setLoading] = useState<boolean>(false)
  const [rewards, setRewards] = useState<Reward[]>([])

  const showTransaction = (tx: string) => {
    if (!tx) return ''
    return tx.substring(0, 20) + '...'
  }

  const requestClaim = async () => {
    setLoading(true)
    await axios.post(API_URL + "/request/" + address);
    setLoading(false)
    setRefresh(!refresh);
  }

  useEffect(() => {
    const getRequests = async () => {
      if (isConnected) {
        let { data } = await axios.get(API_URL + "/claimed/" + address);

        setRewards(data.data)
      }
    }

    getRequests();
  }, [isConnected, refresh])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <span>Claimed Rewards</span>
        <button className={styles['Button']} onClick={() => requestClaim()}>
          Claim Rewards
          {loading && <FontAwesomeIcon className='animate-spin' icon={faCircleNotch} />}
        </button>
      </div>

      <div className='w-full max-w-[500px] max-h-[120px] overflow-y-auto'>
        <table className={styles['ClaimedTable']}>
          <thead>
            <tr>
              <th align='left'>Time</th>
              <th>Amount</th>
              <th>Transaction</th>
            </tr>
          </thead>
          <tbody>
            {rewards.map((data => (
              <tr>
                <td>{data.updated_date.substring(0, 16).replace('T', ' ')}</td>
                <td align='center'>{web3.utils.fromWei(data.reward.toString())} ETH</td>
                <td className='hover:text-[#6e95b4]' align='center'>
                  {data.status == 0 ?
                    <span style={{ color: "#328ae0" }}>Pending</span>
                    :
                    <a href={`https://etherscan.io/tx/${data.txn}`} target='_blank'>
                      {showTransaction(data.txn)}
                    </a>
                  }
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClaimedRewards;