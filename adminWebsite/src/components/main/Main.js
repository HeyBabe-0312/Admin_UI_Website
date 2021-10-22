import "./Main.css";
import Chart from "../charts/Chart";
import Chart1 from "../charts/Chart1";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card1">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner1">
              <h2 className="text_white">578</h2>
              <p className="text_white">Users online</p>
            </div>
          </div>

          <div className="card2">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner2">
            <h2 className="text_white">5267</h2>
              <p className="text_white">Number of Accounts</p>
            </div>
          </div>

          <div className="card3">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner3">
             <h2 className="text_white">136</h2>
              <p className="text_white">Number of Developer</p>
            </div>
          </div>

          <div className="card4">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner4">
            <h2 className="text_white">24</h2>
              <p className="text_white">Games of Developer</p>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Online Users</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1 className="text_white">Max</h1>
                <p className="text_white">530</p>
              </div>

              <div className="card2">
                <h1 className="text_white">Min</h1>
                <p className="text_white">133</p>
              </div>

              <div className="card3">
                <h1 className="text_white">Average</h1>
                <p className="text_white">250</p>
              </div>

              <div className="card4">
                <h1 className="text_white">Total</h1>
                <p className="text_white">1881</p>
              </div>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Top Game</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart1 />
            </div>
            <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1 className="text_white">Max</h1>
                <p className="text_white">5267</p>
              </div>

              <div className="card2">
                <h1 className="text_white">Min</h1>
                <p className="text_white">433</p>
              </div>

              <div className="card3">
                <h1 className="text_white">Average</h1>
                <p className="text_white">3900</p>
              </div>

              <div className="card4">
                <h1 className="text_white">Total</h1>
                <p className="text_white">2367</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
    </main>
  );
};

export default Main;