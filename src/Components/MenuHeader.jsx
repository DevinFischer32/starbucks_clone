import React from "react";
import { Link } from "react-router-dom";

export default function MenuHeader() {
  return (
    <div>
      <h1>All Products</h1>
      <Link to="/menu/featured">
        <h1>Featured</h1>
      </Link>
      <h1>Previous Orders</h1>
      <h1>Faviorte Products</h1>
    </div>
  );
}
