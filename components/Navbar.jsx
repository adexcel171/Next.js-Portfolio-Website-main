import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Navbar.module.css";

import logo from '../public/images/admire logo.jpg'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar} >
        <div className={styles.logo}>
        <Image src={logo} alt='logo' />

        </div>
        <div>
            <ul className={styles.navLinks} >
                <li   className={styles.navItems} > <Link href='/' >Home</Link> </li>
                <li className={styles.navItems}>  <Link href='/http://adexcel.hashnode.dev'>Blog</Link></li>
                <li   className={styles.navItems} > <Link href='/about' >About Me</Link> </li>
                <li   className={styles.navItems} > <Link href='/projects' >Projects</Link> </li>
                <li   className={styles.navItems} > <Link href='/bootcamps' >Bootcamps</Link> </li>
                <li   className={styles.navItems} > <Link href='/contact' >Contact</Link> </li>

            
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
