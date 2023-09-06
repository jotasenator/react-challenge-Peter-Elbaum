import "./styles.css";
import React, { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMEssage] = useState("");

  return {
    email,
    setEmail,
    pass,
    setPass,
    loading,
    setLoading,
    errorMessage,
    setErrorMEssage
  };
};

const LoginForm = () => {
  const {
    email,
    setEmail,
    pass,
    setPass,
    loading,
    setLoading,
    errorMessage,
    setErrorMEssage
  } = useLogin();

  const user = {
    email,
    pass
  };

  const ConditionalLoginButton = !loading && pass.length > 5 && email !== "";

  const handleLogin = () => {
    setLoading(true);
    try {
      setTimeout(() => {
        console.log(user);
        setLoading(false);
        alert("Login succeded!");
      }, 3000);
      //if you want to test the catch logic
      // setLoading(false);
      // throw new Error("Error somehow");
    } catch (error) {
      setLoading(false);
      setErrorMEssage("Error somehow");
      setTimeout(() => {
        setErrorMEssage("");
      }, 1500);
    }
  };

  const handlePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <div className="container">
      <div className="container-email-pass">
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            onChange={handleEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            onChange={handlePass}
            name="password"
            id="password"
            type="password"
          />
        </div>
      </div>
      <br />
      <button disabled={!ConditionalLoginButton} onClick={handleLogin}>
        Login
      </button>

      <div style={{ color: "red" }} className="errorMessage">
        {errorMessage}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}
