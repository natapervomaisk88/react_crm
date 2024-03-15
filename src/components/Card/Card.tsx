import { Link } from "react-router-dom";
import "./Card.css";
import { useParams } from "react-router-dom";
import { list_of_articles } from "../../models/article";

export function Card({ article }: any | undefined) {
  if (article == undefined) {
    //Перевірка на випадок, якщо ця компонента
    //відкривається при перегляді детальної інформаціі
    const { id } = useParams();
    var [article]: any = list_of_articles.filter((el) => {
      if (id != undefined) return el.id == parseInt(id);
    });
  }
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={`/images/${article.image}`} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {article.title}
          <i className="material-icons right">{article.description}</i>
        </span>
        <p>
          <Link to={`${article.id}`}>Detail</Link>
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
