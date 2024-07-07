import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    axios
      .get("https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers")
      .then((res) => {
        res.data.map((e) => {
          if (e.userName == userName && e.password == password) {
            localStorage.setItem("userId", e.id);
            localStorage.setItem("islogin", true);
            toast.success("Success !", {
              position: "top-center",
            });
            navigate("/");
          } else {
            toast.error("user name or password is invalid", {
              position: "top-center",
            });
          }
        });
      });
  };
  return (
    <div className="flex flex-col w-80 border rounded-lg p-4 gap-4">
      <ToastContainer />

      <h1 className="text-3xl">Create account</h1>

      <div className="flex flex-col">
        <label htmlFor="email">Mobile number or email</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name=""
          id="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Password">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id="Password"
        />
      </div>
      <div className="flex">
        <button
          onClick={login}
          className="w-full bg-yellow-500 text-black rounded-md"
        >
          Continue
        </button>
      </div>
      <div>
        <span className="text-xs">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </span>
      </div>
      <hr />
      <div className=" flex justify-between">
        <span>New to Amazon?</span>

        <Link to="/sign/signup">Create account</Link>
      </div>
    </div>
  );
}

export default SignIn;
