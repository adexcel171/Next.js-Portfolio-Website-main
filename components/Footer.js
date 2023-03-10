import styles from "@/styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            All Rights Reserved Portfolio By Godswill <br></br>
          </span>
          Built with{" "}
          <Link href="https://www.nextjs.com/">
            <a target="_blank" rel="noreferrer" className={styles.footerLink}>
              Next.js
            </a>
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
