import { Link } from "react-router-dom";
import "./index.scss";
function Fonds() {
  return (
    <div className="wrapper">
      <div className="d-flex mt-100">
        <img
          width={27}
          height={29}
          className="mr-20 mt-10"
          src="/img/pinkcubic.png"
        />
        <h1 className="myH1 myH1--fonds">Фонды</h1>
      </div>

      <div className=" wrap wrapper d-flex">
        <div class="hover-effect-btn mt-20 mr-20">
          <Link to="/fif">
            <img className="card" src="/img/1.png" alt="" />
            <h3 class="title">Фонд содействия развитию военного образования</h3>
            <div class="overlay"></div>
            <div class="button">
              <a href="#">Поддержать</a>
            </div>
          </Link>
        </div>
        <div class="hover-effect-btn mt-20">
          <img className="card" src="/img/2.png" alt="" />
          <h3 class="title">
            Воскресная школа при Михаило-Архангельском храме
          </h3>
          <div class="overlay"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>

        <div class="hover-effect-btn mt-20 mr-20">
          <img className="card" src="/img/3.png" alt="" />
          <h3 class="title">
            Общественная организация "Российское общество специалистов по
            врожденным порокам сердца" (РОСВПС)
          </h3>
          <div class="overlay"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>
        <div class="hover-effect-btn mt-20">
          <img className="card" src="/img/4.png" alt="" />
          <h3 class="title">Поддержка социальных программ</h3>
          <div class="overlay"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>
        <div class="hover-effect-btn mt-20 mr-20">
          <img className="card" src="/img/5.png" alt="" />
          <h3 class="title">Радио Вера</h3>
          <div class="overlay"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>
        <div class="hover-effect-btn mt-20">
          <img className="card" src="/img/6.png" alt="" />
          <h3 class="title">Поддержка новых проектов</h3>
          <div class="overlay"></div>
          <div class="button">
            <a href="#">Поддержать</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Fonds };
