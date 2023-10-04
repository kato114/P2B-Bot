import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import styles from '../style.module.css'
import { useState } from 'react'

const fakeData: any[] = []

export default function ClaimedRewards() {

  const [loading, setLoading] = useState<boolean>(false)

  const showTransaction = (tx: string) => {
    if (!tx) return ''
    return tx.substring(0, 20) + '...'
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <span>Claimed Rewards</span>
        <button className={styles['Button']}>
          Claim Rewards
          {loading && <FontAwesomeIcon className='animate-spin' icon={faCircleNotch}/>}
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
            {fakeData.map((data => (
              <tr>
                <td>{data.time}</td>
                <td align='center'>{data.amount} ETH</td>
                <td className='hover:text-[#6e95b4]' align='center'>
                  <a href={`https://etherscan.io/tx/${data.transaction}`} target='_blank'>
                    {showTransaction(data.transaction)}
                  </a>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  )
}