const productReducer = (state, action) => {
  switch (action.type) {
    case "API_ERROR": {
      return {
        ...state,
        iserror: true,
      };
    }
    case "SET_API_DATA": {
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
