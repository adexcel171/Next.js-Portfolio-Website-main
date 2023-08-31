import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Navbar.module.css";

import logo from '../public/images/admire logo.jpg'

const Navbar = () => {
  return (
    <div className={styles.navbar} >
        <div className={styles.logo}>
        <Image src={logo} alt='logo' />

        </div>
        <div>
            <ul className={styles.navLinks} >
                <li className={styles.navItems} >Home </li>
                <li className={styles.navItems}>Blog </li>
                <li className={styles.navItems} >About me </li>
                <li className={styles.navItems}>Projects </li>
                <li className={styles.navItems}>Contact </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
