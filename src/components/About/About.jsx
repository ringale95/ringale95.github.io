import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon"/>
            <div className={styles.aboutItemText}>
                <h3>FrontEnd Developer</h3>
                <p>I'm a FrontEnd Developer with experience in building responsive and optimized sites</p>
                </div>
            </li>

            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server-icon"/>
            <div className={styles.aboutItemText}>
                <h3>BackEnd Developer</h3>
                <p>I'm a BackEnd Developer with experience in developing fast and optimized APIs</p>
                </div>
            </li>

            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon"/>
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>I have designed multiple landing pages and have created design systems as well   </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

export default About