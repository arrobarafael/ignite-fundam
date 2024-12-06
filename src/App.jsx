import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Rafael P."
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatem asperiores eveniet ea blanditiis sint dicta amet in minima itaque atque est ullam ipsum deleniti nostrum, repellat incidunt commodi nulla!"
      />
      <Post author="Roberto Souza" content="Novo post com conteúdo diverso" />
    </>
  );
}
