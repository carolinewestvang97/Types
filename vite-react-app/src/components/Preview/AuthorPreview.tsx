import { Author } from "../../articles"
import "./ArticlePreview.css";

export interface AuthorProps{
 author: Author
}

export const AuthorPreview: React.FC<AuthorProps> = ({ author }) =>  {
    return(
        <>
        <img
        src={author.image}
        alt={author.username}
        className="author-image"
        />
        <p>Written by: {author.username}</p>

        <p>{author.bio}</p>
        <p>{author.following}</p>
        </>
    )
}