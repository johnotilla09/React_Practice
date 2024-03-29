import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// Action creator for fetching data from the firebase
export const fetchData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'GET'
            });

            if (!response.ok) {
              throw new Error("Could not fetch cart data");
            }

            const data = await response.json();

            return data;
        };
            
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
            console.log(cartData);
        } catch (error) {
            dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart deta failed",
              })
            );
        }
    }
};

// Action creator for sending data to cart or also called as "thunks"
export const sendCartData =  (cart) => {
    return async (dispatch) => {
        dispatch(
          uiActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart details!",
          })
        );

        const sendRequest = async () => {
            const response = await fetch(
              "https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
              {
                method: "PUT",
                body: JSON.stringify({
                  items: cart.items,
                  totalQuantity: cart.totalQuantity,
                }),
                headers: {
                  "ConTent-Type": "application/json",
                },
              }
            );
          
            if (!response.ok) {
              throw new Error("Sending cart data failed.");
            }
        }

        try {
            await sendRequest();
            dispatch(
              uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Send cart data seccessfully",
              })
            );
        } catch (error) {
            dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart deta failed",
              })
            );
        }
    };
};