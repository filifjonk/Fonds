import { Footer } from "./Footer";
import { Header } from "./Header";
import "./index.scss";
function Sixth() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <img className="mt-100" src="/img/assist.png" />
        <div className="mt-40">
          <h1 className="myH1">Программа “Дело жизни”</h1>
          <p className="greyText mw-600">
            Современные кружки по робототехнике и управлению беспилотниками,
            помощь суворовцам и кадетам в подготовке к профессиям 21 века
          </p>
          <button className="pinkBotton mt-40">Подробнее</button>
        </div>
        <div className="content d-flex wrap mt-60">
          <img className="mr-20" src="/img/all1.png" alt="" />
          <img className="mr-20" src="/img/all2.png" alt="" />
          <img className="mr-20" src="/img/all3.png" alt="" />
          <img className="mr-20 mt-40" src="/img/all4.png" alt="" />
          <img className="mr-20 mt-40" src="/img/all5.png" alt="" />
          <img className="mr-20 mt-40" src="/img/all6.png" alt="" />
          <img className="mr-20 mt-40" src="/img/all7.png" alt="" />
          <img className="mr-20 mt-40" src="/img/all8.png" alt="" />
          <img className="mr-20 mt-40" src="/img/all9.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Sixth };
