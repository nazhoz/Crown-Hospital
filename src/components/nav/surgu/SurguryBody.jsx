import React from "react";

const SurguryBody = ({ name, content }) => {
  return (
    <div className="surgur-main">
      <div className="surguryBody-main">
        <div className="surgury-cards-img">
          <span>Popular Surgeries</span>
          <div className="sur-cards">
            {name.map((item) => (
              <div className="surgury-cards">
                <div>
                  <img className="sur-cards-img" src={item.img} alt="" />
                </div>

                <span className="sur-card-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sur-cards2">
          {content.map((items) => (
            <div>
              <img className="surcards-scnd-img" src={items.img} alt="" />
              <h6>{items.head}</h6>
              <p>{items.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sur-suggestion-box">
        <div className="sur-sugg">
          <h4>Book your consultation today</h4>
          <div className="sur-options">
            <select className="sur-opt" name="" id="">
              <option selected hidden value="">
                Select City
              </option>
              <option value="">Banglore</option>
              <option value="">Delhi NCR</option>
              <option value="">Mumbai</option>
              <option value="">Hyderabad</option>
              <option value="">Pune</option>
              <option value="">Jaipur</option>
              <option value="">Kolkata</option>
            </select>
          </div>
          <div>
            <select className="sur-opt" name="" id="">
              <option selected hidden value="">
                Select Alignment
              </option>
              <option value="">Knee Replacement</option>
              <option value="">Artroscopy</option>
              <option value="">ACL Repair</option>
              <option value="">Sholder Artroscopy</option>
            </select>
          </div>
          <div>
            <input className="sur-opt-input" type="text" placeholder=" Name" />
          </div>
          <div>
            <input
              className="sur-opt-input"
              type="text"
              placeholder=" Number"
            />
          </div>
          <div>
            <input
              className="sur-opt-btn"
              type="button"
              value="Book Appointment"
            />
            <p className="sur-opt-text">
              By submitting the form, you agree to Practo's T&C
            </p>
          </div>
        </div>
        <div className="sur-sugg-or">
          <span>or</span>
        </div>
        <div className="sur-sugg-number">
            <span>Reach out to us on</span>
            <div className="sur-sugg-call">
                <img className="sur-sugg-img" src="https://www.practostatic.com/practo-care/brand_page/images/ic_phone_deepblue_filled.png" alt="" />
                <span>08045685554</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SurguryBody;
