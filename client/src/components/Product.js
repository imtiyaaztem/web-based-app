import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "2rem" }}>
        <Link to="/Cart" style={{ paddingLeft: "60rem" }}>
          Cart
        </Link>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className="fa fa-plus"> Add to cart</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button className="fa fa-plus"> Add to cart</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>
                <button className="fa fa-plus"> Add to cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Product;
