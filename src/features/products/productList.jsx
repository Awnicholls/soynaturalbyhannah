import { commerce } from "../../lib/commerce";
const initialState = [];
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "products/productsLoaded": {
      return action.payload;
    }
    default:
      return state;
  }
}
export async function fetchProducts(dispatch, getState) {
  const { data } = await commerce.products.list();
  const stateBefore = getState();
  console.log("Products before dispatch: ", stateBefore.products.length);

  dispatch({ type: "products/productsLoaded", payload: data });
  const stateAfter = getState();
  console.log("Products after: ", stateAfter.products.length);
}
