import { SURVEYS } from '@/config/surveys';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link
          href={`/${SURVEYS.main_survey.id}`}
          className={styles.startButton}
        >
          {SURVEYS.main_survey.name}
        </Link>

        <Link
          href={`/${SURVEYS.user_survey.id}`}
          className={styles.startButton}
        >
          {SURVEYS.user_survey.name}
        </Link>
      </main>
    </div>
  );
}
