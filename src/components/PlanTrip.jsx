import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your getaway today!</h3>
              <h2>Quick & easy luxury car rental in three easy steps</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of high-end vehicles for all your
                  driving needs. Whether it is a cross-country trip, or just a
                  local weekend getaway. We have it all. At this moment we are
                  no longer providing cars for events, weddings, or
                  professional/commercial uses.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Agent</h3>
                <p>
                  Our knowledgeable and friendly agents are always ready to help
                  with any questions or concerns regarding any car that you
                  would like to have. We do not offer test-drives.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Drive</h3>
                <p>
                  We encourage our customers to enjoy the vehicles, but keep in
                  mind that safety of other cars on the road, and the passengers
                  in the car is of the utmost importance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
