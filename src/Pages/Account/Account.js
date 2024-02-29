import React, { useEffect } from "react";
import "./Account.css";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="account">
      <div className="account-title">
        <h2>Account</h2>
        <p>Home / Account</p>
      </div>
      <div className="account-body">
        <h3>Login</h3>
        <div className="account-body-box">
          <div className="account-box-row">
            <p>
              Username or email address <span>*</span>
            </p>
            <input type="text" />
          </div>
          <div className="account-box-row">
            <p>
              Password <span>*</span>
            </p>
            <input type="text" />
          </div>
          <div className="account-box-row">
            <button>LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;