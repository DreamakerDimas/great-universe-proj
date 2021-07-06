import React from 'react';
import styles from './Home.module.sass';

const Home = () => {
  return (
    <div className={styles.articlesContainer}>
      <div className={styles.mainArticle}>
        <h1>О проекте</h1>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "Великая вселенная" представляет собой свободное пространство для
          творчества, без ограничений по жанру. Многие идеи ещё не обрели
          текстовый вид и существуют только в голове авторов. Создано чисто по
          фану, для развития творческого потенциала.
        </p>
        <p>
          <span className={styles.warningWord}>Внимание!</span> Проект находится
          на ранней стадии развития, весь предоставленный контент может коренным
          образом изменится в ходе проработки вселенной.
        </p>
      </div>
      <div className={styles.otherArticle}>
        <h1>Сопряжение</h1>
        <p>
          Кит закрывающий сюжетные дыры и главное отличие от реального мира.
        </p>
        <p>
          В великой вселенной, что однажды была идентична нашей, произошло или
          происходит событие, изменившее саму структуру бытия и наполнило её
          различными существами, силами и взаимодействиями, истинная природа
          которых, до сих пор достоверно неизвестна.
        </p>
        <p>
          Самым ярким примером аномальности вселенной для человекообразных
          является существование людей, эльфов и гномов, в так называемом
          Кластере Федерации. При этом, на их родных планетах, доказательные
          базы эволюционного развития собственного вида отличаются. А в
          некоторых случаях практически полностью отсутствует. При этом замечено
          высокое генетическое сходство данных расс, что и по сей день пораждает
          различные гипотизы.
        </p>
      </div>
    </div>
  );
};

export default Home;
