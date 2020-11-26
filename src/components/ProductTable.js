import ProductRow from './ProductRow';
import React from 'react';

function ProductTable(props) {
  let allProducts = props.data;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {allProducts.map((product) => {
          return <ProductRow name={product.name} price={product.price} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
