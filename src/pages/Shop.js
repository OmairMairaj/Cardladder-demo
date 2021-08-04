// import { filter } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { SearchBox } from "../components/SearchBox";
import product_card from "../data/data.json";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      items: product_card,
      searchField: "",
    };
  }
  render() {
    const { items, searchField } = this.state;
    const filteredList = items.filter((product_card) =>
      product_card.product_name
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    console.log(filteredList);
    const listItems = filteredList.map((item) => (
      <div className="card" key={item.id}>
        <div className="card_img">
          <img src={item.thumb} alt="headphone" />
        </div>
        <div className="card_header">
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>
          <p className="price">
            {item.price}
            <span>{item.currency}</span>
          </p>
          <Link className="btn-cart" to={`/product/${item._id}`}>
            View Details
          </Link>
        </div>
      </div>
    ));
    return (
      <>
        <h1 className="shop">SHOP</h1>
        <div className="container">
          <div className="searchbar">
            <SearchBox
              placeholder="Enter Search Text..."
              handleChange={(e) =>
                this.setState({ searchField: e.target.value })
              }
            />
          </div>
          <div className="main_content">{listItems}</div>
        </div>
      </>
    );
  }
}

export default Shop;
