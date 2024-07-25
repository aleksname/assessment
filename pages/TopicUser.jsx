import styles from './styles/styles.module.scss';
import IconRating from './IconRating';

export default function TopicUser({ students }) {
  return (
    <div className={styles.topicItemUser}>
      {students.map((student, index) => (
        <div key={index} className={styles.topicUserText}>{student}
          <IconRating student={student} />
        </div>
      ))}
    </div>
  );
}
