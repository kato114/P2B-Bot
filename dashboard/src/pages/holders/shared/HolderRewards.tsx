import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import axios from 'axios'
import Web3 from 'web3'

import { API_URL } from '../../../config'

import styles from '../style.module.css'

type Reward = {
  updated_date: string;
  unclaimed_rewards: number;
  block_number: string;
  type: number;
  status: number;
};

type Statistic = {
  total_reward: string;
  claimed_reward: string;
  unclaimed_reward: string;
};

type HolderRewardsProps = {
  setStatistic: React.Dispatch<React.SetStateAction<Statistic>>;
};

const HolderRewards: React.FC<HolderRewardsProps> = ({ setStatistic }) => {
  const web3 = new Web3();

  // @ts-ignore
  const BN = web3.utils.BN;

  const { address, isConnected } = useAccount()
  const [rewards, setRewards] = useState<Reward[]>([])

  useEffect(() => {
    const getRewardHistory = async () => {
      if (isConnected) {
        let { data } = await axios.get(API_URL + "/history/" + address);

        setRewards(data.data)

        let total_reward = new BN(0);
        let claimed_reward = new BN(0);
        let unclaimed_reward = new BN(0);
        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].type == 0) {
            total_reward = total_reward.add(new BN(data.data[i].unclaimed_rewards));
            if (data.data[i].status == 0) {
              unclaimed_reward = unclaimed_reward.add(new BN(data.data[i].unclaimed_rewards));
            } else if (data.data[i].status == 1) {
              claimed_reward = claimed_reward.add(new BN(data.data[i].unclaimed_rewards));
            }
          }
        }

        setStatistic({
          total_reward: total_reward.toString(),
          claimed_reward: claimed_reward.toString(),
          unclaimed_reward: unclaimed_reward.toString(),
        })
      }
    }

    getRewardHistory();
  }, [isConnected])

  return (
    <div className='flex flex-col w-full'>
      <span className='w-full text-center py-2'>Holder Rewards History</span>

      <table className={styles['Table']}>
        <thead>
          <tr className={styles['TableHeaderRow']}>
            <th align='left'>Snapshot block</th>
            <th>Time</th>
            <th>Rewards</th>
            <th align='right'>Status</th>
          </tr>
        </thead>
        <tbody>
          {rewards.map((data => (
            data.type == 0 &&
            <tr className={styles['TableBodyRow']}>
              <td>{data.block_number}</td>
              <td align='center'>{data.updated_date.substring(0, 16).replace('T', ' ')}</td>
              <td align='center'>{web3.utils.fromWei(data.unclaimed_rewards.toString())} ETH</td>
              <td className='' align='right'>
                <span style={{ padding: "2px 5px", background: data.status == 0 ? "#328ae0" : data.status == 1 ? "#0b6d1f" : "#ff521e" }}>
                  {data.status == 0 ? "Claimable" : data.status == 1 ? "Claimed" : "Locked"}
                </span>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  )
}

export default HolderRewards;