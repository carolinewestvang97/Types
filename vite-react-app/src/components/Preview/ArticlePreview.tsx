
import { Article } from "../../articles"
import { FavoriteButton } from "../Button/FavoriteButton";
import "./ArticlePreview.css";
import { AuthorPreview } from "./AuthorPreview";


export interface ArticleProps {
    article: Article;
    onLikeClick: (slug: string) => void;
}

export const ArticlePreview: React.FC<ArticleProps> = ({ article, onLikeClick }) =>  {
function likeClick() {
  onLikeClick(article.slug);
  console.log("clicked")
}

const onClick = () => alert("Clicked");

return (
    <div className="article-preview">
    <h2 className="article-title">{article.title}</h2>
    <div className="article-meta">
    <AuthorPreview author={article.author}/>
    <FavoriteButton onClick={onClick}/>
    <p>Favorites: {article.favoritesCount}</p>
    </div>
    <div className="article-content">
    <h3>{article.description}</h3>
    <p>{article.body}</p>
    <ul className="tags">{article.tagList.map((tag: string) => 
      <li key={tag}>{tag}</li>
    )}</ul>
    <button id="like" onClick={likeClick} className={`favorite-button ${article.favorited ? "favorited" : ""}`}>
      {article.favorited ? "Unfavorite" : "Favorite"}
      </button>
    </div>
    </div>

)
}