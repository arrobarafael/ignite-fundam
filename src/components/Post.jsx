import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.article}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/14929854?v=4" />
          <div className={styles.authorInfo}>
            <strong>Rafael Pelegrini</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:07">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto éDoctorCare 🚀{' '}
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>{' '}
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
