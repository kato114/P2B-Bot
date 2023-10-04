import styles from '../style.module.css'

export default function ReferralRewards () {
  return (
    <div className='flex flex-col w-full'>
      <span className='w-full text-center py-2'>Referral Rewards History</span>

      <table className={styles['Table']}>
        <thead>
          <tr className={styles['TableHeaderRow']}>
            <th align='left'>#</th>
            <th>Block</th>
            <th>Date</th>
            <th>Wallet</th>
            <th>Swap Cost/Gain (ETH)</th>
            <th>Referral Reward (ETH)</th>
            <th>Transaction</th>
            <th align='right'>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className={styles['TableBodyRow']}>
            <td>1</td>
            <td align='center'>2</td>
            <td align='center'>3</td>
            <td align='center'>4</td>
            <td align='center'>5</td>
            <td align='center'>6</td>
            <td align='center'>7</td>
            <td align='right'>8</td>
          </tr>
          <tr className={styles['TableBodyRow']}>
            <td>1</td>
            <td align='center'>2</td>
            <td align='center'>3</td>
            <td align='center'>4</td>
            <td align='center'>6</td>
            <td align='center'>7</td>
            <td align='center'>8</td>
            <td align='right'>5</td>
          </tr>
          <tr className={styles['TableBodyRow']}>
            <td>1</td>
            <td align='center'>2</td>
            <td align='center'>3</td>
            <td align='center'>4</td>
            <td align='center'>6</td>
            <td align='center'>7</td>
            <td align='center'>8</td>
            <td align='right'>5</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}