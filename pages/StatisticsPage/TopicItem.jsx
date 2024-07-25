import styles from '../styles/styles.module.scss';
import Image from 'next/image';
import TopicUser from './TopicUser';

export default function TopicItem({ children, childrenIcon, students }) {
  return (
    <div className={styles.topicItemIcon}>
      <div className={styles.topicIconbloks}>
        <p className={styles.topicText}>{children}</p>
        <Image src={childrenIcon} alt={childrenIcon} className={styles.topicImg} />
      </div>
      <TopicUser students={students} />
    </div>
  );
}
