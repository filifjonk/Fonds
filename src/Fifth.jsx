import { Link } from "react-router-dom";
import { Header } from "./Header";
import "./index.scss";
import { Slider } from "./Slider";
function Fifth() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <img className="mt-100" src="/img/assist.png" />
        <Slider />
        <div className="mt-40">
          <h1 className="myH1">
            Фонд содействия развитию военного образования
          </h1>
          <button className="pinkBotton mt-40">Поддержать</button>
        </div>
        <div className="d-flex justify-between">
          <div className="about mw-600 mr-60">
            <div className="d-flex mt-100">
              <img
                className="mr-20 mt-10"
                width={27}
                height={29}
                src="img/cubic.png"
              />
              <h1 className="myH1">О фонде</h1>
            </div>
            <p className="greyText">
              Фонд содействия развитию военного образования создан по инициативе
              выпускников суворовских училищ.
            </p>
            <h2>Миссия Фонда: </h2>
            <p className="greyText">
              Содействовать развитию системы военного образования и
              способствовать росту ее потенциала через повышение качества и
              привлекательности обучения в военных учебных заведениях, опираясь
              на накопленный опыт, лучшие традиции военного образования и
              современные образовательные и информационные технологии.
            </p>
            <h2>Принципы деятельности:</h2>
            <li className="greyText greyText--puncts">
              фокус на создание новых решений
            </li>
            <li className="greyText greyText--puncts">созидательность</li>
            <li className="greyText greyText--puncts">
              открытость и прозрачность
            </li>
            <li className="greyText greyText--puncts">
              опора на научное мировоззрение и патриотические ценности
            </li>
            <li className="greyText greyText--puncts">
              привлечение независимой и авторитетной научной экспертизы
            </li>
            <li className="greyText greyText--puncts">
              сотрудничество и равноправные партнерские отношения с
              благополучателями фонда
            </li>
            <li className="greyText greyText--puncts">
              эффективное взаимодействие со всеми заинтересованными
            </li>
            <li className="greyText greyText--puncts">
              сторонами - педагогами, учащимися и выпускниками СВУ, родителями
              учащихся, ВУЗами, министерствами и ведомствами, СМИ, широкой
              общественностью
            </li>
            <li className="greyText greyText--puncts">
              взаимодействие на постоянной основе с Минобороны России и другими
              госструктурами и регулирующими ведомствами
            </li>
          </div>
          <div className="fonds">
            <div className="d-flex mt-100">
              <img
                className="mr-20 mt-10"
                width={27}
                height={29}
                src="img/greencubic.png"
              />
              <h1 className="myH1">Проекты фонда</h1>
            </div>
            <div className=" wrap wrapper d-flex">
              <div class="hover-effect-btn mt-40 mr-20">
                <Link to="/all">
                  <div className="card card--small card--small--one"> </div>
                  <div class="title title--proj">
                    ДЕЛО ЖИЗНИ<div className="lin"></div>
                    <div className="cardText">
                      Проект помогает освоить актуальные профессии
                    </div>
                    <div className="sum">
                      <h2 className="whiteText ">Собрано</h2>
                      <h3 className="whiteText whiteText--bold">
                        18 624 849 руб.
                      </h3>
                      <h2 className="whiteText ">Осталось</h2>
                      <h3 className="whiteText whiteText--bold">
                        21 375 151 руб.
                      </h3>
                    </div>
                  </div>
                  <div class="overlay overlay--small"></div>
                  <div class="button">
                    <a href="#">Поддержать</a>
                  </div>
                </Link>
              </div>

              <div class="hover-effect-btn mt-40 mr-20">
                <div className="card card--small card--small--two"> </div>
                <div class="title title--proj">
                  ДЕЛО ЖИЗНИ<div className="lin"></div>
                  <div className="cardText">
                    Проект помогает освоить актуальные профессии
                  </div>
                  <div className="sum">
                    <h2 className="whiteText ">Собрано</h2>
                    <h3 className="whiteText whiteText--bold">
                      18 624 849 руб.
                    </h3>
                    <h2 className="whiteText ">Осталось</h2>
                    <h3 className="whiteText whiteText--bold">
                      21 375 151 руб.
                    </h3>
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
                    <h3 className="whiteText whiteText--bold">
                      18 624 849 руб.
                    </h3>
                    <h2 className="whiteText ">Осталось</h2>
                    <h3 className="whiteText whiteText--bold">
                      21 375 151 руб.
                    </h3>
                  </div>
                </div>
                <div class="overlay overlay--small"></div>
                <div class="button">
                  <a href="#">Поддержать</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Fifth };
