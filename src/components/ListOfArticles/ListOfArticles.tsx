import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
export function ListOfArticles() {
  const [list_of_articles, setListOfArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((data) => data.json())
      .then((json) => {
        setListOfArticles(json);
      });
  }, []);
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
