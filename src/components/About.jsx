import styles from "../css/About.module.css";
import photo from "../images/evgenii-buslaev.PNG";

function About() {
  return (
    <div className={styles.aboutCont}>
      <h1 className={styles.aboutHeader}>О себе</h1>
      <div className={styles.aboutContent}>
        <img src={photo} alt="developer" />
        <div className={styles.aboutDescription}>
          <p>
            В течение последних шести месяцев я самостоятельно обучаюсь
            веб-разработке. Выполняя работы, которые Вы увидите в разделе
            портфолио, я сталкивался со множеством проблем, способы решения
            которых я искал в google и/или спрашивал у более опытных
            разработчиков, что, в свою очередь, уже дало мне некоторый опыт. В
            данный момент я продолжаю обучение, но предполагаю, что готов
            работать в команде и дальше развиваться в разработке. Для более
            полного ознакомления с моими навыками разработки Вы можете
            просмотреть мое резюме, а также аккаунт на GitHub. Спасибо за
            интерес к моему портфолио!
          </p>
          <div className={styles.aboutButtons}>
            <a href="/" target="_blank">
              Посмотреть резюме
            </a>
            <a href="https://github.com/Evgenii-Buslaev" target="_blank">
              Аккаунт на GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
