
import styles from "./about.module.css";
import Typewriter from "../components/Typewriter";
export default function About() {
  return (
    <div class={styles.aboutContainer}>
      <div class={styles.picture}>
        <div class={styles.imgContainer}>
          <img alt="Portrait" src="/images/portrait-new.jpg" />
        </div>
      </div>
      <div class={styles.description}>
        <h1>Hassan Bazzi</h1>
        <Typewriter>
          People Person | Entrepreneur | Software Engineer
        </Typewriter>
        <p>
          I'm a people-oriented engineer and leader with 2 decades of
           development and leadership experience. I love to build products that
           matter and engineering teams that can do a lot with a little. My
           leadership style focuses on empathy and compassion while being a
           hands-on developer myself. Passionate about creating environments
           where individuals can do their best work and embrace their
           self-expression.
        </p>
        <p>
          Expert in all things JavaScript, React, Node.JS, CSS, React Native,
          Backend Architecture, and building high-performing happy engineering
          teams.
        </p>
        <p>
          <a
            href="https://medium.com/@habazzi/"
            rel="noopener noreferrer"
            target="_blank"
          >
            I write sometimes
          </a>
        </p>
      </div>
    </div>
  );
}
