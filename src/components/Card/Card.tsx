import "./Card.css";
import { Article } from "../../models/article";
import { Link } from "react-router-dom";

export function Card(props: Article) {
  const article = { ...props.article };
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={`images/${article.image}`} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {article.title}
          <i className="material-icons right">{article.description}</i>
        </span>
        <p>
          <a href="#">Detail</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
}
