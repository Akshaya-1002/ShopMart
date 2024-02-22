import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";

const Cart = () => {
  const productData = useSelector((state) => state.shopMart.productData);
  const userInfo = useSelector((state) => state.shopMart.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setpayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    // console.log(price)
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  // proceed to checkout
  const handleCheckout = () => {
    if (userInfo) {
      setpayNow(true);
      toast.success("Successfully payed");
    } else {
      toast.error("Please sign in Checkout");
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Order summary</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              {/* "Shipping" refers to the fee and process of delivering purchased items from the seller to the buyer's address. */}
              Shipping{" "}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos,
                veritatis
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
