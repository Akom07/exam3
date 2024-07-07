import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Details() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getitem();
  }, []);
  const getitem = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setItem(res.data);
    });
  };
  const addToCart = () => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`)
      .then((res) => {
        const newCartitem = {
          id: uuid(),
          quantity: 1,
          item: item,
        };
        axios
          .put(
            `https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`,
            {
              cart: [...res.data.cart, newCartitem],
            }
          )
          .then(
            toast.success("Success !", {
              position: "top-center",
            })
          );
      });
  };
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <ToastContainer />

        <div className="flex w-full justify-center pt-4 gap-8">
          <img className=" h-96" src={item.image} alt="" />
          <div className="flex flex-col gap-8 w-1/2">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center gap-2"
            >
              <FaAngleLeft />
              Back to Home
            </button>
            <h1 className="text-3xl">{item.title}</h1>
            <h1>{item.description}</h1>
            <div className="flex gap-4">
              <h1>{item.price}$</h1>
              <button onClick={addToCart}> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
