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
          return <ProductRow {...product} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
