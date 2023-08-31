import Image from "next/image";
import styles from "@/styles/Background.module.css";
import Lottie from 'lottie-react'
import animationData from '../public/images/animation_lltdrpj1 (1).json'

function Background() {
  return (
    <div className={styles.container}>
      <Lottie  animationData={animationData} />
      
     
    </div>
  );
}

export default Background;
