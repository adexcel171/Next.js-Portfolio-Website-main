import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

function Header(props) {
  const [menu, setShowMenu] = useState(true);

  const openMenuHandler = () => setShowMenu(!menu);
  const closeMenuHandler = () => setShowMenu(true);

  return (
    <header>
      <Navbar/>

      <div
        className={menu ? "menu-btn" : "menu-btn close"}
        onClick={openMenuHandler}
   

      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      

      </div>
      <nav className={menu ? "menu" : "menu show"}>
        <div className={menu ? "menu-branding" : "menu-branding show"}>
          <div className="portrait-img-2">
            <Image
              src="/images/admire logo.jpg"
              width={250}
              height={300}
              quality={100}
              className="portrait-img"
              alt="Excel logo"
            />
          </div>
        </div>
        <ul className={menu ? "menu-nav" : "menu-nav show"}>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="/">
              <a className="nav-link" onClick={closeMenuHandler}>
                home
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="http://adexcel.hashnode.dev">
              <a className="nav-link" onClick={closeMenuHandler}>
                blog
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="/about">
              <a className="nav-link" onClick={closeMenuHandler}>
                about me
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="/projects">
              <a className="nav-link" onClick={closeMenuHandler}>
                projects
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="/bootcamps">
              <a className="nav-link" onClick={closeMenuHandler}>
                knowledge
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="/contact">
              <a className="nav-link" onClick={closeMenuHandler}>
                contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
