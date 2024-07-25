import React, { useState } from 'react';
import styles from './styles/styles.module.scss';
import icon1 from '../public/calculation.png';
import icon2 from '../public/abacus.png';
import icon3 from '../public/calculator2.png';
import icon4 from '../public/blackboard.png';
import TopicItem from '../pages/TopicItem';

const students = ['Алан', 'Артем', 'Аміна', 'Вєлат', 'Софія'];

export default function Main() {
  const [totalStars, setTotalStars] = useState(0);
  const [studentStars, setStudentStars] = useState(
    students.reduce((acc, student) => ({ ...acc, [student]: 0 }), {})
  );

  const handleCalculateStars = () => {
    const ratings = document.querySelectorAll('.rating-star');
    let stars = 0;
    const individualStars = students.reduce((acc, student) => ({ ...acc, [student]: 0 }), {});

    ratings.forEach(rating => {
      const value = parseInt(rating.getAttribute('data-value'), 10);
      stars += value;
      const student = rating.getAttribute('data-student');
      individualStars[student] += value;
    });

    setTotalStars(stars);
    setStudentStars(individualStars);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Успішність на уроці</h1>
      <div className={styles.startScreen}>
        <div className={styles.topicBlockItem}>
          <TopicItem children={"Активна участь"} childrenIcon={icon1} className='bg-green-400' students={students} />
          <TopicItem children={"Уважність та зосередженість"} childrenIcon={icon2} className='bg-red-400' students={students} />
          <TopicItem children={"Робота з кодом"} childrenIcon={icon3} students={students} />
          <TopicItem children={"Робота з кахутом"} childrenIcon={icon4} students={students} />
        </div>
        <div className={styles.startAsideBlock}>
        </div>
      </div>
      <div className={styles.rationBlock}>
        <button onClick={handleCalculateStars} className={styles.calculateButton}>
          Обрахувати зірочки
        </button>
        <div className={styles.totalStars}>
          Загальна кількість зірочок: {totalStars}
        </div>
        <div className={styles.studentStars}>
          {students.map(student => (
            <div key={student}>
              {student}: {studentStars[student]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
