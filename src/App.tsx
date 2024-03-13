import "./App.css";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { Article, list_of_articles } from "./models/article";

function App() {
  const main_title: string = "My System";
  return (
    <>
      <Navbar my_title={main_title} />
      <div className="row">
        {list_of_articles.map((el) => (
          <div className="col s12 m6 l3">
            <Card article={el} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
