import styles from "@/styles/Heading.module.css";
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { GiMailbox, GrLinkedin } from "react-icons/gi";
import Link from "next/link";

function Header() {
  return (
    <main className={styles.header}>
      <h1 className="lg-heading">
        Godswill
        <span className={styles.textSecondary}> Okenyi</span>
      </h1>
      <h2 className="sm-heading">
        Full Stack Web Developer (MERN STACK)
      </h2>
      <div className={styles.icons}>
        <Link href="">
          <a target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </Link>
        <Link href="https://github.com/MarioG8">
          <a target="_blank" rel="noreferrer">
            <FaGithub className={styles.icon} />
          </a>
        </Link>
        <Link href="https://stackoverflow.com/users/13705979/mariog8">
          <a target="_blank" rel="noreferrer">
            <FaStackOverflow className={styles.icon} />
          </a>
        </Link>
        <Link href="godwillokenyi@yahoo.com">
          <a>
            <GiMailbox className={styles.icon} />
          </a>
        </Link>
      </div>
    </main>
  );
}

export default Header;
