import React, { useState } from "react";

export function Inputs() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alerta, setAlerta] = useState(false);

  return (
    <>
      <h2 className="h2-login">Login</h2>
      <form className="form-inputs">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
          placeholder="Email"
          className="mail-box"
          required
        ></input>

        <input
          onChange={(e) => setPass(e.target.value)}
          type={"password"}
          className="pass-box"
          placeholder="Password"
          required
        ></input>
      </form>
      <label className="remember-me">
        <input type="checkbox" className="check-box" />
        Remember me
      </label>
      <div className="form-buttons">
        <button
          className="login-button"
          onClick={(e) => {
            if (email != "" && pass != "") {
              alert("Login completado");
            }
          }}
        >
          Login
        </button>
        <button className="register-button" onClick={() => {}}>
          Register
        </button>
      </div>
    </>
  );
}

export function ButtonsLogin() {
  return;
}
