import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");

  const navigate = useNavigate();

  const newAccont = () => {
    if (userName < 3) {
      toast.error("user name must be more than 3 letter", {
        position: "top-center",
      });
    } else if (!email.match("[a-zA-Z0-9]@gmail.+[A-Za-z]")) {
      toast.error("you must use a @gmail.", {
        position: "top-center",
      });
    } else if (
      password != rePass ||
      password == undefined ||
      password == "" ||
      password < 3 ||
      !password.match("[a-z][A-Z][0-9]")
    ) {
      toast.error(
        "password must contane 1 small letter 1 big letter 1 number",
        {
          position: "top-center",
        }
      );
    } else {
      axios
        .post(`https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers`, {
          userName,
          password,
          email,
          cart: [],
        })
        .then(
          toast.success("Success!", {
            position: "top-center",
          }),
          navigate("/sign/signin")
        );
    }
  };

  return (
    <div className="flex flex-col w-80 border rounded-lg p-4 gap-4">
      <ToastContainer />

      <h1 className="text-3xl">Create account</h1>
      <div className="flex flex-col">
        <label htmlFor="userName">Your name</label>
        <input
          className="border"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name=""
          id="userName"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Mobile number or email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="flex flex-col">
        <label htmlFor="Pass">Re-enter password</label>
        <input
          type="text"
          value={rePass}
          onChange={(e) => setRePass(e.target.value)}
          name=""
          id="Pass"
        />
      </div>
      <div className="flex">
        <button
          onClick={newAccont}
          className="w-full bg-yellow-500 text-black rounded-md"
        >
          Continue
        </button>
      </div>
      <div>
        <span className="text-xs">
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </span>
      </div>
      <hr />
      <div className=" flex justify-between">
        <span>Already have an account?</span>

        <Link to="/sign/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
