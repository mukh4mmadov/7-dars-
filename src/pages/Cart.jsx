import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");

  function handleAddCart(e) {
    e.preventDefault();
    const data = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      count: parseInt(count),
    };

    dispatch({ type: "ADD_CART", payload: data });
    setName("");
    setPrice("");
    setCount("");
  }

  function handleRemove(id) {
    dispatch({ type: "REMOVE_CART", payload: id });
  }

  function handleClearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <form onSubmit={handleAddCart} className="space-y-3">
        <input
          type="text"
          placeholder="Nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="narxi"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Soni"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Cartga qo'shish
        </button>
      </form>

      <button
        onClick={handleClearCart}
        className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        Barcha cartlarni tozalash
      </button>

      <div className="space-y-3">
        {cart.length > 0 ? (
          cart.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{value.name}</h3>
                <p className="text-sm text-gray-600">Narxi: ${value.price}</p>
                <p className="text-sm text-gray-600">Soni: {value.count}</p>
              </div>
              <button
                onClick={() => handleRemove(value.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <FaTrashAlt className="text-xl" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Sizning Cartlaringiz bo'sh
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
