import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/styles.module.scss';
import icon1 from '../public/calculation.png';
import icon2 from '../public/abacus.png';
import icon3 from '../public/calculator2.png';
import icon4 from '../public/blackboard.png';
import TopicItem from '../pages/TopicItem';
import MainContainer from './MainContainer';
import Diagrama from './Diagrama';

const groups = {
  group1: ['Алан', 'Артем', 'Аміна', 'Вєлат', 'Софія'],
  group2: ['Максим', 'Устим', 'Денис', 'Саша', "Степан"]
};
const maxStarsPerStudent = 20;

export default function Main() {
  const [selectedGroup, setSelectedGroup] = useState('group1');
  const students = groups[selectedGroup];
  const [totalStars, setTotalStars] = useState(0);
  const [studentStars, setStudentStars] = useState(
    students.reduce((acc, student) => ({ ...acc, [student]: 0 }), {})
  );

  const handleCalculateStars = async () => {
    const ratings = document.querySelectorAll('.rating-star');
    let stars = 0;
    const individualStars = students.reduce((acc, student) => ({ ...acc, [student]: 0 }), {});

    ratings.forEach(rating => {
      const value = parseInt(rating.getAttribute('data-value'), 10);
      stars += value;
      const student = rating.getAttribute('data-student');
      individualStars[student] += value;
    });
    //
   
    // 
    setTotalStars(stars);
    setStudentStars(individualStars);

    try {
      await axios.post('http://localhost:5000/api/stars', {
        date: new Date().toISOString(),
        group: selectedGroup,
        stars: individualStars
      });
      alert('Зірочки успішно збережено!');
    } catch (error) {
      console.error('Error saving stars:', error);
    }

     try {
    const повідомлення = `Добрий вечір! Ми завершили наш урок і ось наші успіхи:\n`;
    const успіхиУчнів = Object.entries(studentStars).map(([учень, зірочки]) => {
      return `${учень} - ${зірочки} зірочок`;
    }).join('\n');

    await axios.post(`https://api.telegram.org/bot7330464042:AAHK8dljTfDKEYmvBuHEnImFX463DYsQGWY/sendMessage`, {
      chat_id: `<1317980286>`,
      text: повідомлення + успіхиУчнів,
    });
    alert('Зірочки успішно збережено та повідомлення відправлено в Telegram!');
  } catch (error) {
    console.error('Помилка при відправці повідомлення в Telegram:', error);
  }
  };

  const studentPercentages = students.reduce((acc, student) => {
    const percentage = (studentStars[student] / maxStarsPerStudent) * 100;
    return { ...acc, [student]: percentage };
  }, {});

  return (
    <MainContainer titels={"Progress page"}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Успішність на уроці</h1>
        <div className={styles.startScreen}>
          <div>
            <label htmlFor="group-select">Вибрати групу:</label>
            <select id="group-select" onChange={(e) => setSelectedGroup(e.target.value)}>
              {Object.keys(groups).map(group => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.topicBlockItem}>
            <TopicItem children={"Активна участь"} childrenIcon={icon1} className='bg-green-400' students={students} />
            <TopicItem children={"Уважність та зосередженість"} childrenIcon={icon2} className='bg-red-400' students={students} />
            <TopicItem children={"Робота з кодом"} childrenIcon={icon3} students={students} />
            <TopicItem children={"Робота з кахутом"} childrenIcon={icon4} students={students} />
          </div>
          <div className={styles.startAsideBlock}></div>
        </div>

        <div className={styles.rationBlock}>
          <button onClick={handleCalculateStars} className={styles.calculateButton}>
            Обрахувати зірочки
          </button>
          <div className={styles.totalStars}>
            Загальна кількість зірочок: {totalStars}
            <Diagrama data={studentPercentages} className />
          </div>
        </div>  
      </div>
    </MainContainer>
  );
}
