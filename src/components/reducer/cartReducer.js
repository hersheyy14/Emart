const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, product, qty } = action.payload;
    console.log(id, product, qty, "from reducer");

    let cartProducts;
    cartProducts = {
      id: id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      rating: product.rating.rate,
      qty: qty,
    };
    return {
      ...state,
      cart: [...state.cart, cartProducts],
    };
  }

  if (action.type === "INCREASE_ITEM") {
    let increaseItemCart = state.cart.find(
      (curItem) => curItem.id === action.payload.id
    );
    if (increaseItemCart) {
      increaseItemCart.qty = increaseItemCart.qty + 1;
      const cartItemWithoutId = state.cart.filter(
        (curItem) => curItem.id !== action.payload.id
      );
      return { ...state, cart: [...cartItemWithoutId, increaseItemCart] };
    }
  }

  if (action.type === "DECREASE_ITEM") {
    let decreaseItemCart = state.cart.find(
      (curItem) => curItem.id === action.payload.id
    );
    if (decreaseItemCart.qty === 1) {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      decreaseItemCart.qty = decreaseItemCart.qty - 1;
      const decreaseItem = state.cart.filter(
        (curItem) => curItem.id !== action.payload.id
      );
      return { ...state, cart: [...decreaseItem, decreaseItemCart] };
    }
  }

  return state;
};

export default CartReducer;
