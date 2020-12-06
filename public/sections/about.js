import styles from "./about.module.css";
import Typewriter from "../components/Typewriter";
export default function About() {
  return (
    <div class={styles.aboutContainer}>
      <div class={styles.picture}>
        <div class={styles.imgContainer}>
          <img alt="Portrait" src="/images/portrait.jpg" />
        </div>
      </div>
      <div class={styles.description}>
        <h1>Hassan Bazzi</h1>
        <Typewriter>Engineering - Product - Fullfillment Coach</Typewriter>
        <p>
          I'm a people-oriented engineering leader with 15+ years of experience
          and a deep compassion for human beings. Experienced in building
          products and engineering teams in a wide variety of spectrums, and
          sustaining these teams overtime with a strong focus on personal
          development and coaching. My leadership style focuses on empathy and
          compassion and sits on a decade of being a senior engineer myself.
        </p>
        <p>
          Expert in React(Native), GraphQL, and server / user land performance.
        </p>
        <p>
          My latest focus has been on{"  "}
          <a
            href="https://medium.com/@habazzi/what-the-hell-do-we-want-in-life-anyways-b6456bd82f3d"
            rel="noopener noreferrer"
            target="_blank"
          >
            helping others figure out their dreams.
          </a>
        </p>
      </div>
    </div>
  );
}
