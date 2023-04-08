import React, { useState } from "react";
import "./Register.css";

export default function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    await fetch(
      "https://techcyber-blog-default-rtdb.europe-west1.firebasedatabase.app/techcybercontact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }
    );

    document.getElementById('signup').style.display="none"

  };

  return (
    <div className="Popup" id="formModal">
      <button
        className="btn btn-danger btn-close cl"
        onClick={() => {
          props.setTrigger(false);
        }}
      >
        X
      </button>
      <div className="form-box">
        <div className="login-signup">
          <h2>Login</h2>
          <form action="" id="login" method="POST">
            <div className="user-box">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={getUserData}
                id="login-email"
                autocomplete="off"
                required
              />
              <label for="">Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={getUserData}
                id="login-pass"
                autocomplete="off"
                required
              />
              <label for="">Password</label>
            </div>
            <div className="forget-pwd">
              <h4>Forgot Password?</h4>
            </div>
            <div className="btn">
              <button id="login-submit">Submit</button>
            </div>
            
            <h4>
              Create account ?<span id="nav-to-signup">Click here</span>
            </h4>
          </form>
        </div>
        {/* Signup Form */}
        <div className="login-signup">
          <h2>Signup</h2>
          <form action="#" id="signup" method="POST">
            <div className="user-box">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={getUserData}
                id="signup-username"
                autocomplete="off"
                required
              />
              <label for="">Username</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={getUserData}
                id="signup-email"
                autocomplete="off"
                required
              />
              <label for="">Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={getUserData}
                id="signup-pass"
                autocomplete="off"
                required
              />
              <label for="">Password</label>
            </div>
            <div className="btn">
              <button id="signup-submit" onClick={postData}>
                Submit
              </button>
            </div>
             
            <h4>
              Already have an Account ?<span id="nav-to-login">Click here</span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
}
