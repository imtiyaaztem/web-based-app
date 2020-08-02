import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "./Action/cartAct";
import { Link } from "react-router-dom";

class Product extends Component {
  click = (id) => {
    this.props.addCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id} style={{ width: "30rem" }}>
          <div className="card-img-top">
            <img src={item.img} alt={item.title} style={{ width: "50%" }} />
            <span
              to="/"
              className="btn btn-primary btn-circle btn-sm"
              onClick={() => {
                this.click(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="contCard">
            <p>{item.desc}</p>
            <p>Price: R{item.price}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h2>Parts</h2>
        <Link
          to="/Cart"
          className="fa fa-shopping-cart"
          style={{ paddingLeft: "60rem", fontSize: "20px" }}
        >
          {" "}
          Cart
        </Link>
        <div className="listbox">{itemList}</div>
      </div>
    );
  }
}
const StateProps = (state) => {
  return {
    items: state.items,
  };
};
const DispatchProps = (dispatch) => {
  return {
    addCart: (id) => {
      dispatch(addCart(id));
    },
  };
};
export default connect(StateProps, DispatchProps)(Product);
