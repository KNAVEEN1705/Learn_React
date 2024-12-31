import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utills/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Shopping Cart</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <h2 className="text-xl text-gray-600 font-semibold text-center py-4">
            Your cart is empty. Please add some items!
          </h2>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Items in Cart: {cartItems.length}</h2>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            <ItemList items={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
