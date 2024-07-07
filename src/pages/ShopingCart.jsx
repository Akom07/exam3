import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

function ShopingCart() {
  const [items, setItems] = useState([]);
  const [totle, setTotle] = useState(0);

  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    getitems();
  }, []);
  const getitems = () => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`)
      .then((res) => {
        setItems(res.data.cart);
        setisloading(false);
      });
  };
  const plus = (e) => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`)
      .then((res) => {
        console.log(res.data.cart);
        res.data.cart.map((x) => {
          if (x.id == e) {
            x.quantity = x.quantity += 1;
          }
        });
        axios
          .put(
            `https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`,
            { cart: res.data.cart }
          )
          .then(getitems());
      });
  };
  const sub = (e) => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`)
      .then((res) => {
        console.log(res.data.cart);
        res.data.cart.map((x) => {
          if (x.id == e) {
            x.quantity = x.quantity -= 1;
          }
        });
        axios
          .put(
            `https://665736c59f970b3b36c866df.mockapi.io/AmazonUsers/${userId}`,
            { cart: res.data.cart }
          )
          .then(getitems());
      });
  };
  return (
    !isloading && (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <div>
            <h1>totle</h1>
          </div>
          <div className="flex flex-col gap-4">
            {items.map((e) => {
              return (
                <div key={e.id} className="flex h-40 gap-4">
                  <img className="w-32" src={e.item.image} alt="" />
                  <div className="flex flex-col gap-2 justify-around">
                    <h1>{e.item.title}</h1>
                    <h1>{e.item.price}$</h1>
                    <div className="flex items-center justify-between rounded-md gap-2 border w-fit p-1 px-2">
                      <button onClick={() => plus(e.id)}>+</button>
                      <span>{e.quantity}</span>
                      <button onClick={() => sub(e.id)}>-</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default ShopingCart;
