import "./index.scss";
function About() {
  return (
    <div className="wrapper">
      <div className="d-flex mt-100">
        <img
          width={27}
          height={29}
          className="mr-20 mt-10"
          src="/img/greencubic.png"
        />
        <h1 className="myH1 myH1--fonds">О проекте</h1>
      </div>
      <p className="greyText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
    </div>
  );
}
export { About };
