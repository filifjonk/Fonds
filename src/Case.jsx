import "./index.scss";
function Case() {
  return (
    <div className="wrapper">
      <img className="mt-100" src="/img/assist.png" />
      <div className="assist d-flex mt-40">
        <img className=" mr-60" src="/img/case.png" />
        <div className="assists-text">
          <h1 className="myH1">Программа “Дело жизни”</h1>
          <p className="greyText">
            Современные кружки по робототехнике и управлению беспилотниками,
            помощь суворовцам и кадетам в подготовке к профессиям 21 века
          </p>
          <button className="pinkBotton mt-40">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
export { Case };
