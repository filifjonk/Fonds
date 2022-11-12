import "./index.scss";
function Assist() {
  return (
    <div className="wrapper">
      <img className="mt-100" src="/img/assist.png" />
      <div className="assist d-flex mt-40">
        <img className=" mr-60" src="/img/dance.png" />
        <div className="assists-text">
          <h1 className="myH1">
            Фонд содействия развитию военного образования
          </h1>
          <p className="greyText">
            Фонд содействия развитию военного образования создан по инициативе
            выпускников суворовских училищ.
          </p>
          <button className="pinkBotton mt-40">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
export { Assist };
