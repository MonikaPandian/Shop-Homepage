import React from "react";

const SingleProduct = () => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
      });
    switch (action.type) {
        case "ADD_TO_CART":
          return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
          default:
            return state;
        }
    return (
        <div>
            <button className="btn btn-danger"
            
                onClick={() =>
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                    })
                }
            >
                Remove from Cart
            </button>

            <button className="btn btn-primary"
                onClick={() =>
                    dispatch({
                        type: "ADD_TO_CART",
                        payload: prod,
                    })
                }
            >
                Add to Cart
            </button>
        </div>
    )


}

export default SingleProduct;