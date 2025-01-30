import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("OTP");
  const [OTPSent, setOTPSent] = useState(false);
  const [otp, setOTP] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("red");
  const API_URL = "https://web-hr-gp-backend.onrender.com";

  useEffect(() => {
    // fetch("http://localhost:5000/api/post", {
    //   method: "POST",
    //   body: JSON.stringify({ number: mobileNumber }),
    // })
    //   .then((response) => {
    //     response.text();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  });

  const login = () => {
    if (otp !== null) {
      console.log(otp);
      axios
        .post(`${API_URL}/verify-otp`, {
          number: mobileNumber,
          userEnteredOtp: otp,
        })
        .then((res) => {
          navigate("/home", { replace: true });
          window.localStorage.setItem("number", mobileNumber);
        })
        .catch((err) => {
          console.log(err);
          setError("Invalid OTP");
          setColor("red");
        });
      // fetch(`${API_URL}/verify-otp`, {
      //   method: "POST",
      //   body: {
      //     number: mobileNumber,
      //     userEnteredOtp: otp,
      //   },
      // })
      //   .then((res) => {
      //     if (!res.ok) {
      //       // throw new Error("Network response was not ok");
      //       setError("You entered invalid OTP");
      //     }
      //     return res.json();
      //   })
      //   .then((resdata) => {
      //     console.log(resdata, "Successfully logged in");
      //     navigate("/home");
      //   })
      //   .catch((err) => console.log(err));
    }
  };

  const sendOTP = () => {
    console.log(mobileNumber);
    if (mobileNumber !== "" && mobileNumber.length === 10) {
      axios
        .post(`${API_URL}/send-otp`, { number: mobileNumber })
        .then((res) => {
          console.log(res.data);
          setOTPSent(true);
          setText("Login");
          setError("OTP Sent");
          setColor("white");
        })
        .catch((err) => console.log(err));
      // fetch(`${API_URL}/send-otp`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     number: mobileNumber,
      //   }),
      // })
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     setOTPSent(true);
      //     setText("Login");
      //     setError("");
      //   })
      //   .catch((err) => console.log(err));
    } else {
      setError("Enter valid mobile number");
    }
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  return (
    <div className="container">
      <div className="login-container">
        <img
          src={require("./assets/gp_logo.webp")}
          style={{ width: 100, height: 70 }}
        />
        <p className="login-text">Login</p>
        <input
          placeholder="Enter mobile number"
          type="tel"
          onChange={handleMobileNumberChange}
        />
        {OTPSent && (
          <input
            placeholder="Enter OTP"
            type="tel"
            onChange={handleOTPChange}
          />
        )}
        {error !== "" && <p style={{ color: color }}>{error}</p>}

        {text === "OTP" && (
          <button className="login-button" onClick={() => sendOTP()}>
            Send OTP
          </button>
        )}
        {text === "Login" && (
          <button className="login-button" onClick={() => login()}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
