import styles from "@/styles/Heading.module.css";

import { FaGithub, FaWhatsapp, FaLinkedin,FaTwitter} from "react-icons/fa";

import { GiMailbox, GrLinkedin } from "react-icons/gi";
import Link from "next/link";

function Header()

{
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
        <Link href="https://www.linkedin.com/in/godswill-okenyi-b9432323b/">
          <a target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </Link>
        <Link href="https://github.com/adexcel171">
          <a target="_blank" rel="noreferrer">
            <FaGithub className={styles.icon} />
          </a>
        </Link>
        
        <Link href="godwillokenyi@gmail.com">
          <a>
            <GiMailbox className={styles.icon} />
          </a>
        </Link>
        <Link href="https://twitter.com/iam_donzzy">
          <a>
            <FaTwitter className={styles.icon} />
          </a>
        </Link>
       
        <Link href="https://twitter.com/iam_donzzy">
          <a>
            <FaWhatsapp className={styles.icon} />
          </a>
        </Link>
       
      </div>
      
    
    </main>
  );
}

export default Header;
