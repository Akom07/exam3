import React from "react";
import SignUp from "../components/SignUp";
import { useParams } from "react-router-dom";
import SignIn from "../components/SignIn";
import logo from "../assets/Amazon.png";

function SignPage() {
  const { sign } = useParams();
  return (
    <div className="flex justify-center flex-col gap-4 pt-4">
      <button className="flex justify-center">
        <img className="w-24" src={logo} alt="" />
      </button>
      <div className="flex justify-center">
        {sign == "signup" ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
}

export default SignPage;
