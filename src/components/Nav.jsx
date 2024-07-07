import React from "react";
import logo from "../assets/Amazon.png";
import { FaMapMarkerAlt, FaSearch, FaCaretDown } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="bg-black flex flex-col items-center w-full">
      <div className="flex w-full items-center gap-8">
        <img className="pt-4 pl-6 w-28" src={logo} alt="" />
        <div className="flex items-end">
          <FaMapMarkerAlt />
          <div className=" flex flex-col">
            <h1 className="text-sm">Deliver to </h1>
            <h1 className="flex items-end">Saudi Arabia</h1>
          </div>
        </div>
        <div className="w-[45%] h-10 flex items-center">
          <div className="flex items-center w-full h-4/5 bg-white rounded-md ">
            <select className="bg-white  h-3/4 " name="" id="">
              <option value="">All</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <input
              className="bg-white w-full h-3/4"
              type="text"
              name=""
              id=""
            />
            <div className="flex items-center p-2 rounded-r-md bg-orange-400 h-full ">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="h-10">
          <select className="h-full" name="" id="">
            <option value="">us</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <button onClick={() => navigate("../sign/signin")}>
          <h1>hello,sign in</h1>
          <h1 className="flex items-center">
            Accont & Lists <FaCaretDown />
          </h1>
        </button>
        <div>
          <h1>Reterns</h1>
          <h1 className="flex items-center">
            & Orders <FaCaretDown />
          </h1>
        </div>
        <button onClick={() => navigate("/cart")}>
          <AiOutlineShoppingCart size={52} />
        </button>
      </div>
    </div>
  );
}

export default Nav;
