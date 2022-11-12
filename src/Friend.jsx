import "./index.scss";
import { Link } from "react-router-dom";
function Friend() {
  return (
    <div className="wrapper d-flex column ">
      <h2 className="myH2">
        Содружество фондов - это объединение организаций, делающих добрые дела.
      </h2>
      <Link to="/cart">
        <button className=" pinkBotton mt-10">Подробнее</button>
      </Link>
    </div>
  );
}
export { Friend };
