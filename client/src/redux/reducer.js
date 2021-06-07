import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";
const invoiceState = [];

const invoiceReducer = (state = invoiceState, action) => {
  switch (action.type) {
    case actionTypes.ALL_INVOICES:
      return [action.payload];

    case actionTypes.DELETE_INVOICE:
      return [action.payload];

    default:
      return state;
  }
};

const totalState = [];
const totalPriceReducer = (state = totalState, action) => {
  switch (action.type) {
    case actionTypes.TOTAL:
      return [action.payload];
    default:
      return state;
  }
};
const Reducer = combineReducers({
  invoiceReducer,
  totalPriceReducer,
});

export default Reducer;
