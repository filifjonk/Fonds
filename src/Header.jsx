import "./index.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between mt-60">
        <Link to="/">
          <img src="/img/logo.png" />
        </Link>
        <div className="headerRight d-flex">
          <h3 className="come mr-40">Присоединиться</h3>
          <Link to="/sup">
            <button className="pinkBotton">Поддержать</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
export { Header };
