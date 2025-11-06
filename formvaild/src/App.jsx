import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comment: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First name</label><br />
        <input
          className="outline"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name.."
          value={formData.firstName}
          onChange={changeHandler}
        /><br />

        <label htmlFor="lastName">Last name</label><br />
        <input
          className="outline"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name.."
          value={formData.lastName}
          onChange={changeHandler}
        /><br />

        <label htmlFor="email">Email address</label><br />
        <input
          className="outline"
          type="email"
          name="email"
          id="email"
          placeholder="Email.."
          value={formData.email}
          onChange={changeHandler}
        /><br />

        <label htmlFor="country">Country</label><br />
        <select
          className="outline"
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>Luxembourg</option>
          <option>United States</option>
          <option>Switzerland</option>
        </select><br />

        <label htmlFor="streetAddress">Street Address</label><br />
        <input
          className="outline"
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Street Address.."
          value={formData.streetAddress}
          onChange={changeHandler}
        /><br />

        <label htmlFor="city">City</label><br />
        <input
          className="outline"
          type="text"
          name="city"
          id="city"
          placeholder="City.."
          value={formData.city}
          onChange={changeHandler}
        /><br />

        <label htmlFor="state">State</label><br />
        <input
          className="outline"
          type="text"
          name="state"
          id="state"
          placeholder="State.."
          value={formData.state}
          onChange={changeHandler}
        /><br />

        <label htmlFor="postalCode">Postal Code</label><br />
        <input
          className="outline"
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Postal Code.."
          value={formData.postalCode}
          onChange={changeHandler}
        /><br /><br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex flex-row">
            <input
              id="comment"
              name="comment"
              type="checkbox"
              checked={formData.comment}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comment">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset><br />

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            checked={formData.pushNotification === "Everything"}
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label><br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as Email"
            checked={formData.pushNotification === "Same as Email"}
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label><br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No push notification"
            checked={formData.pushNotification === "No push notification"}
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">Push Nothing</label>
        </fieldset><br />

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>
          Save</button>
      </form>
    </div>
  );
}

export default App;
