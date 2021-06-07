import React from "react";
import Popup from "reactjs-popup";
import "../scss/new-item.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewInvoice } from "../redux/actions";
import { formValidation, initialValues } from "../validation/validaion";
function NewItem() {
  return (
    <Popup
      contentStyle={{
        backgroundColor: "white",
        width: "60%",
        height: "fit-content",
        padding: "1%",
        fontSize: "12px",
        fontWeight: "1",
        boxShadow: "0 0 5px #333",
      }}
      trigger={<span style={{ width: "100%" }}>ADD</span>}
      position="top right"
    >
      {
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={(values) => {
            addNewInvoice(values);
          }}
        >
          {(formik) => {
            return (
              <Form className="newItemForm">
                <div className="fieldItem">
                  <label htmlFor="productName">Product Name :</label>
                  <Field
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="Product Name..."
                  />
                  <ErrorMessage name="productName" component="p" />
                </div>
                <div className="fieldItem">
                  <label htmlFor="description">Description</label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description..."
                  />
                  <ErrorMessage name="description" component="p" />
                </div>
                <div className="fieldItem">
                  <label htmlFor="price">Price :</label>
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price... "
                  />
                  <ErrorMessage name="price" component="p" />
                </div>
                <div className="fieldItem">
                  <label htmlFor="quantity">Quantity :</label>
                  <Field
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Quantity... "
                  />
                  <ErrorMessage name="quantity" component="p" />
                </div>
                <div className="fieldItem">
                  <label htmlFor="amount">Amount :</label>
                  <Field
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Amount... "
                  />
                  <ErrorMessage name="amount" component="p" />
                </div>
                <div className="submitButton">
                  <button type="submit">Add</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      }
    </Popup>
  );
}

export default NewItem;
