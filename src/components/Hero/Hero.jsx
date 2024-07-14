import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        Hi, I'm Raveena
      </h1>
      <p className={styles.description}>I am a Software Engineer with 4 years of experience with React & SpringBoot.</p>
      <p className={styles.description}>Reach out if you'd like to learn more!</p>
      <a href="mailto:ravina.ing95@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}

export default Hero