import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css'
import { useState } from 'react'

export function Header () {

  const [loading, setLoading] = useState<boolean>(true)

  return (
    <div className={styles['Header']}>
      <div className='flex w-full items-center md:hidden'>
        <div className='flex items-center flex-grow gap-2'>
          <img className='h-[24px]' src="logo.png" alt="logo"/>
        </div>
        <div className='flex flex-row gap-4 items-center'>
          <NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#6e95b4]' : ''}>
            DashBoard
          </NavLink>
          <NavLink to={'/holders'} className={({isActive}) => isActive ? 'text-[#6e95b4]' : ''}>
            Holder Rewards
          </NavLink>
          <NavLink to={'/referral'} className={({isActive}) => isActive ? 'text-[#6e95b4]' : ''}>
            Referral Rewards
          </NavLink>
        </div>
      </div>
      <div className={styles['CheckRewards']}>
        <input className={styles['InputAddress']} placeholder='Wallet Address...'/>
        <button className={styles['ButtonCheck']}>
          Check Rewards
          {loading && <FontAwesomeIcon className='animate-spin' icon={faCircleNotch}/>}
        </button>
      </div>
    </div>
  )
} 