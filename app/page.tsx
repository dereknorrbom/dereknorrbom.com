import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.flexContainer}`}>
        <div className={styles.profileImageContainer}>
          <Image
            src="/Frendan_Braser.jpg" // Replace with your profile image path
            alt="Profile Picture"
            width={480} // These sizes are now used to maintain aspect ratio
            height={480}
            className={styles.profilePic}
            priority
          />
        </div>
        <div>
          <h1 className={styles.title}>Hello, I&apos;m [Your Name]</h1>
          <p className={styles.introduction}>
            I&apos;m a [Your Job Title] specializing in [Your Specialization]. Welcome to my personal portfolio.
          </p>
        </div>
      </section>

      <section className={`${styles.projects} ${styles.flexContainer}`}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          {/* Example Project */}
          <a href="[Project Link]" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Project Name &rarr;</h3>
            <p>Description of the project and the technologies used.</p>
          </a>
          {/* Repeat for other projects */}
        </div>
      </section>

      <section className={`${styles.contact} ${styles.flexContainer}`}>
        <h2>Contact Me</h2>
        <div>
          <p>Feel free to reach out for collaborations or just a chat.</p>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          {/* Add more contact options if necessary */}
        </div>
      </section>
    </main>
  );
}
