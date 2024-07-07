import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContentHolder() {
  const [items, setitems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getitems();
  }, []);
  const getitems = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setitems(res.data);
    });
  };
  return (
    <div className=" flex flex-wrap justify-around gap-4 w-full">
      {items.map((e) => {
        return (
          <div className="border w-60 " key={e.id}>
            <img className="w-60 h-48" src={e.image} alt="" />
            <div className="p-2 ">
              <h1>{e.title}</h1>
              <div className="flex justify-between ">
                <h1>{e.price}</h1>
                <button onClick={() => navigate(`../details/${e.id}`)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContentHolder;
