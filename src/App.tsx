import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import { list_of_articles } from "./models/article";
import { Home } from "./components/Home/Home";
import { ListOfArticles } from "./components/ListOfArticles/ListOfArticles";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { NewCard } from "./components/NewCard/NewCard";

function App() {
  const main_title: string = "My System";
  return (
    <>
      <BrowserRouter>
        <Navbar my_title={main_title} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/articles" element={<ListOfArticles />} />
          <Route path="/articles/:id" element={<Card />} />
          <Route path="/add_card" element={<NewCard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
