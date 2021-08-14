import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import Notification from "./components/UI/Notification";
import {sendCartData} from "./store/cart-slice"
let isInitial = true;


function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    //const sendCartData = async () => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "Pending",
      //     title: "Sending...",
      //     message: "Sending Cart Data",
      //   })
      // );
      // const response = await fetch(
      //   "https://react-http-18358-default-rtdb.firebaseio.com/cart.json",
      //   {
      //     method: "PUT",
      //     body: JSON.stringify(cart),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Sending cart data failed.");
      // }

      // dispatch(
      //   uiActions.showNotification({
      //     status: "Success",
      //     title: "Success...",
      //     message: "Send cart data successfully",
      //   })
      // );
    //};

    if (isInitial) {
      isInitial = false;
      return;
    }

    // sendCartData().catch((error) => {
    //   // dispatch(
    //   //   uiActions.showNotification({
    //   //     status: "Error",
    //   //     title: "Error",
    //   //     message: "Seding cart data failed",
    //   //   })
    //   // );
    // });
dispatch(sendCartData(cart))

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
