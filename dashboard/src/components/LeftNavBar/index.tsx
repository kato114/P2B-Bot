import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faTrophy } from '@fortawesome/free-solid-svg-icons'

import styles from "./style.module.css"
import { Footer } from '../Footer'


export function LeftNavBar() {

  return (
    <div className={styles['LeftNavBar']}>
      <div className={styles['Content']}>
        <div className={styles['TopLogo']}>
          <img height={12} src="logo.png" />
          <div className="flex flex-col w-full">
            <span>Perpbot Revenue Sharing</span>
          </div>
        </div>

        <div className={styles['MainMenu']}>
          <NavLink to={'/'} className={({ isActive }) => isActive ? styles['MenuItem-active'] : styles['MenuItem']}>
            <FontAwesomeIcon icon={faGears} color='white' />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to={'/holders'} className={({ isActive }) => isActive ? styles['MenuItem-active'] : styles['MenuItem']}>
            <FontAwesomeIcon icon={faTrophy} color='white' />
            <span>Holder Rewards</span>
          </NavLink>
          <NavLink to={'/referral'} className={({ isActive }) => isActive ? styles['MenuItem-active'] : styles['MenuItem']}>
            <FontAwesomeIcon icon={faTrophy} color='white' />
            <span>Referral Rewards</span>
          </NavLink>
        </div>

        <Footer className='' />
      </div>

      <div className={styles['Divider']}></div>
    </div>
  )
}