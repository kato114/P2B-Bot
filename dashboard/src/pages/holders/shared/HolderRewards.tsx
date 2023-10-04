import styles from '../style.module.css'

export default function HolderRewards () {
  return (
    <div className='flex flex-col w-full'>
      <span className='w-full text-center py-2'>Holder Rewards History</span>

      <table className={styles['Table']}>
        <thead>
          <tr className={styles['TableHeaderRow']}>
            <th align='left'>Snapshot block</th>
            <th>Time</th>
            <th>Rewards</th>
            <th>Unlock</th>
            <th align='right'>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className={styles['TableBodyRow']}>
            <td>1</td>
            <td align='center'>2</td>
            <td align='center'>3</td>
            <td align='center'>4</td>
            <td align='right'>5</td>
          </tr>
          <tr className={styles['TableBodyRow']}>
            <td>1</td>
            <td align='center'>2</td>
            <td align='center'>3</td>
            <td align='center'>4</td>
            <td align='right'>5</td>
          </tr>
          <tr className={styles['TableBodyRow']}>
            <td>1</td>
            <td align='center'>2</td>
            <td align='center'>3</td>
            <td align='center'>4</td>
            <td align='right'>5</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}