import { Link } from "react-router-dom";
import "./index.scss";
function Projects() {
  return (
    <div className="wrapper">
      <div className="d-flex mt-100">
        <img
          width={27}
          height={29}
          className="mr-20 mt-10"
          src="/img/greencubic.png"
        />
        <h1 className="myH1 myH1--fonds">Проекты фонда</h1>
      </div>
      <div className=" wrap wrapper d-flex">
        <Link to="/sup">
          <div class="hover-effect-btn mt-40 mr-20">
            <div className="card card--small card--small--one"> </div>
            <div class="title title--proj">
              ДЕЛО ЖИЗНИ<div className="lin"></div>
              <div className="cardText">
                Проект помогает освоить актуальные профессии
              </div>
              <div className="sum">
                <h2 className="whiteText ">Собрано</h2>
                <h3 className="whiteText whiteText--bold">18 624 849 руб.</h3>
                <h2 className="whiteText ">Осталось</h2>
                <h3 className="whiteText whiteText--bold">21 375 151 руб.</h3>
              </div>
            </div>
            <div class="overlay overlay--small"></div>
            <div class="button">
              <a href="#">Поддержать</a>
            </div>
          </div>
        </Link>
        <div class="hover-effect-btn mt-40 mr-20">
          <div className="card card--small card--small--two"> </div>
          <div class="title title--proj">
            ДЕЛО ЖИЗНИ<div className="lin"></div>
            <div className="cardText">
              Проект помогает освоить актуальные профессии
            </div>
            <div className="sum">
              <h2 className="whiteText ">Собрано</h2>
              <h3 className="whiteText whiteText--bold">18 624 849 руб.</h3>
              <h2 className="whiteText ">Осталось</h2>
              <h3 className="whiteText whiteText--bold">21 375 151 руб.</h3>
            </div>
          </div>
          <div class="overlay overlay--small"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>
        <div class="hover-effect-btn mt-40 mr-20">
          <div className="card card--small card--small--three"> </div>
          <div class="title title--proj">
            ДЕЛО ЖИЗНИ<div className="lin"></div>
            <div className="cardText">
              Проект помогает освоить актуальные профессии
            </div>
            <div className="sum">
              <h2 className="whiteText ">Собрано</h2>
              <h3 className="whiteText whiteText--bold">18 624 849 руб.</h3>
              <h2 className="whiteText ">Осталось</h2>
              <h3 className="whiteText whiteText--bold">21 375 151 руб.</h3>
            </div>
          </div>
          <div class="overlay overlay--small"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Projects };
