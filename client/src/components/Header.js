import React from "react";
import { connect } from "react-redux";

import "../scss/header.scss";
function Header(props) {
  const { totalPriceReducer } = props.state;
  return (
    <div className="headerContainer">
      <div className="title">
        <h1>Invoice</h1>
        <img
          src="https://www.pngkey.com/png/detail/550-5509803_js-logo-javascript-logo-circle-png.png"
          alt="Logo"
        />
      </div>
      <div className="user">
        <div className="fromUser">
          <h2>from</h2>
          <h1>John Smith</h1>
          <h2>name@company.com</h2>
          <h2>12 company street</h2>
          <h2>City</h2>
          <h2>Country</h2>
          <h2>P:605645215231</h2>
        </div>
        <div className="forUser">
          <h2>for</h2>
          <h1>Client Name</h1>
          <h2>name@custumer.com</h2>
          <h2>34 customer street</h2>
          <h2>City</h2>
          <h2>Country</h2>
          <h2>P:605645215231</h2>
        </div>
      </div>
      <div className="detailsSection">
        <div className="details">
          <h2>
            Number :{" "}
            {totalPriceReducer.length === 0
              ? null
              : totalPriceReducer[0].quantity}
          </h2>
          <h2>
            Date :{" "}
            {totalPriceReducer.length === 0
              ? null
              : new Date().toLocaleDateString()}{" "}
          </h2>
          <h2>Terms : </h2>
          <h2>
            Due:
            {totalPriceReducer.length === 0
              ? null
              : totalPriceReducer[0].quantity}{" "}
          </h2>
        </div>
        <div className="totalPrice">
          <h2>
            subTotal :{" "}
            {totalPriceReducer.length === 0
              ? null
              : totalPriceReducer[0].priceWithoutTax}
            $
          </h2>
          <h2>
            Tax(5%) :
            {totalPriceReducer.length === 0
              ? null
              : totalPriceReducer[0].totalTax}
            $
          </h2>
          <h2>
            Total :
            {totalPriceReducer.length === 0
              ? null
              : totalPriceReducer[0].priceWithTax}
            $
          </h2>
          <h1>
            Balance Due :
            {totalPriceReducer.length === 0
              ? null
              : totalPriceReducer[0].priceWithTax}
            $
          </h1>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Header);
