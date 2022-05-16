/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faRss } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../logo.svg'

const styles = {
 navLink: `text-white flex mx-[10px]`,
 badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
 navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
 nav: `flex justify-center items-center gap-[20px]`,
 header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
 headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
 inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
 input: `bg-transparent outline-none text-white w-70 ml-3`,
 cursorPointer: `mr-5 cursor-pointer`,
}

function Header() {
 const navigate = useNavigate()

 const onClickHome = () => navigate('teams')

 return (
  <div className={styles.header}>
   <div onClick={onClickHome} role="button" className="w-[200px] h-[200px]">
    df
    <img src={logo} alt="logo" className="object-cover" width={200} height={200} />
   </div>

   <div className={styles.headerWrapper}>
    <nav className={styles.nav}>
     <div className={styles.navItem}>
      <div className={styles.navLink}>Cryptocurrencies</div>
      <div className={styles.badge} />
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>Exchanges</div>
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>NFT</div>
      <div className={styles.badge} />
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>Cryptown</div>
      <div className={styles.badge} />
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>Portfolio</div>
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>Watchlist</div>
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>Products</div>
      <div className={styles.badge} />
     </div>

     <div className={styles.navItem}>
      <div className={styles.navLink}>Learn</div>
     </div>
    </nav>

    <div className="flex items-center">
     <FontAwesomeIcon icon={faRss} />
     <div className={styles.inputContainer}>
      <FontAwesomeIcon icon={faSearch} />
      <input className={styles.input} placeholder="Search" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Header
