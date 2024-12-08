import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael P."
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatem asperiores eveniet ea blanditiis sint dicta amet in minima itaque atque est ullam ipsum deleniti nostrum, repellat incidunt commodi nulla!"
          />
          <Post
            author="Roberto Souza"
            content="Novo post com conteúdo diverso"
          />
        </main>
      </div>
    </>
  );
}
