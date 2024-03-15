import "./Navbar.css";
import { Link } from "react-router-dom";
export function Navbar(props: any) {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            {props.my_title}
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <Link to="/articles">Articles</Link> */}
              <Link to="articles">List Of Articles</Link>
            </li>
            <li>
              <a href="add_card">Add Article</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
