import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "./utills/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveCart = () => {
    dispatch(removeItem());
  };

  return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Your Shopping Cart</h1>

      <div className="bg-gray-50 shadow-lg rounded-lg p-8 max-w-5xl mx-auto">
        {cartItems.length === 0 ? (
          <h2 className="text-xl text-gray-500 font-medium text-center py-6">
            Your cart is empty. Add some items to start shopping!
          </h2>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-700">Items in Cart: {cartItems.length}</h2>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <button
                  className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-md shadow hover:bg-yellow-600 transition"
                  onClick={handleRemoveCart}
                >
                  Remove Items
                </button>
                <button
                  className="px-6 py-2 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 transition"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <ItemList items={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
