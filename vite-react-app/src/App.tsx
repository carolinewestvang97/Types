import './App.css'
import { articles as initialArticles } from './articles';
import { ArticlePreview } from './components/Preview/ArticlePreview';
import { Header } from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [articles, setArticles] = useState(initialArticles);
  
  const handleLikeClick = (slug: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article =>
        article.slug === slug 
        ? {
          ...article,
          favorited: !article.favorited,
          favoritesCount: article.favorited
            ? article.favoritesCount - 1
            : article.favoritesCount + 1,
        }
        : article
      )
    );
  }

  return (
    <>
      <Header />
      <div className="articles-container">
        {articles.map((article) => (
          <ArticlePreview key={article.slug} article={article} onLikeClick={handleLikeClick} />
        ))}
      </div>
    </>
  );
}

export default App;
