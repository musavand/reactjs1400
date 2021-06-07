import axios from "axios";
import * as actionTypes from "./actionTypes";
import Store from "./Store";

const totalPrice = (props) => {
  let priceWithoutTax = props.reduce((total, current) => {
    return total + current.price;
  }, 0);
  let quantity = props.reduce((total, current) => {
    return total + current.quantity;
  }, 0);
  let totalTax = priceWithoutTax * 0.05;
  let priceWithTax = priceWithoutTax + totalTax;
  return {
    type: actionTypes.TOTAL,
    payload: {quantity, priceWithoutTax, totalTax, priceWithTax },
  };
};

const allInvoices = (invoices) => {
  return {
    type: actionTypes.ALL_INVOICES,
    payload: invoices,
  };
};

const deleteInvoice = (invoice) => {
  return {
    type: actionTypes.DELETE_INVOICE,
    payload: invoice,
  };
};

export const findAllInvoices = () => {
  axios
    .get("http://localhost:4000/allInvoices")
    .then((res) => {
      Store.dispatch(allInvoices(res.data));
      // console.log(res.data);
      Store.dispatch(totalPrice(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addNewInvoice = (newInvoince) => {
  axios
    .post("http://localhost:4000/newInvoice", newInvoince)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const deleteOneInvoice = (id) => {
  axios
    .delete(`http://localhost:4000/deleteInvoices/${id}`)
    .then((res) => {
      Store.dispatch(deleteInvoice(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
