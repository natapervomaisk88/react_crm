import { list_of_articles } from "../../models/article";
import { Card } from "../Card/Card";
export function ListOfArticles() {
  console.log("+");
  return (
    <div className="row">
      {list_of_articles.map((el) => (
        <div className="col s12 m6 l3" key={el.id}>
          <Card article={el} key={el.id} />
        </div>
      ))}
    </div>
  );
}
