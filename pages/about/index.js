import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { GrLinkedin } from "react-icons/gr";
import AwesomeCard from "@/components/AwesomeCard";
import BootCampCard from "@/components/BootcampCard";
import Showcase from "@/components/Showcase";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="About me page" />
      </Head>
      <Showcase image="/images/code_007.jpg" position="top" />
      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_txt_wrapper}>
            <h1>about me..</h1>
            <h3>
              Full Stack Web Developer (MERN STACK).
        
            </h3>
            <p>
              <strong className={styles.strong}>Programming</strong> is one of
              my biggest passion. I first discovered programming from a friend and 
              decided to give it a try and from that point i started growing a passion for web development. my professional career suddenly changed
              direction to.
            </p>
            <p>
              <strong className={styles.strong}>From </strong>January 2022, I
              decided to  connect with my passion
              professionally. I am an ambitious, self-taught programmer who
              loves to learn. I draw my knowledge from traditional sources such
              as books, as well as from more modern source like bootcamps,
              tutorials, online course and internet forums for coders.
            </p>
            
            <p>
              <strong className={styles.strong}>Presently</strong> my favorite
              programming language is JavaScript. Both from the front-end Js and
              frameworks like(React.js, Next.js) and the server side, backend
              (Node.js, Express). My stronger side is currently the front-end,
              but I am doing my best to balance my knowledge and I am also
              focusing on learning the back-end (Node.js, Express, mongoDB)
            </p>
            <p>
              <strong className={styles.strong}>My</strong> dream and goal, in
              the near future is to create useful web and mobile applications,
              based on JavaScript language (Next.js, React.js) as
              well as expand my knowledge, experience, towards the full stack
              JavaScript developer.
            </p>
            <div className={styles.icons}>
              <Link href="https://www.linkedin.com/in/mariusz-golik-712482258/">
                <a target="_blank" rel="noreferrer">
                  <GrLinkedin className={styles.icon} />
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
              <Link href="godwillokenyi@gmail.com">
                <a>
                  <GiMailbox className={styles.icon} />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.about_img_wrapper}>
            {/* <Image
              src="/images/"
              alt="Awesome handsome blond man in sunglasses. In the background a reed "
              height={700}
              width={475}
              objectFit="cover"
              quality={100}
              className={styles.about_image}
            /> */}
          </div>
        </div>
        <div className={styles.about_header_two}>
          <h1>skills & bootcamps</h1>
        </div>
        <div className={styles.about_tech_wrapper}>
          <AwesomeCard
            img="/images/html_001.png"
            title="Fundamentals"
            description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap 5 and Tailwin Git, Github, devtools(firefox, chrome)"
            link="https://developer.mozilla.org/en-US/docs/Learn"
          />
          <AwesomeCard
            img="/images/js.png"
            title="JavaScript"
            description=" JavaScript, Node.js & Express, mongoDB, React.js, Next.js"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
         
          <BootCampCard
            img="/images/bootcamp5.jpg"
            title="Bootcamps"
            description=" JavaScript, Node.js, React.js, Next.js"
          />
        </div>
      </section>
    </>
  );
}

export default AboutPage;
