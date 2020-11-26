import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.product.data,
    filteredProducts: this.props.product.data,
  };

  searchProduct = (params) => {
    let newList = this.state.products.filter((product) => {
      // if stocked, return products that match the name and are stocked
      // how to check if they match the name

      if (params.stocked) {
        return (
          product.name.toLowerCase().includes(params.name) && product.stocked
        );
      } else {
        return product.name.toLowerCase().includes(params.name);
      }
    });
    this.setState({
      filteredProducts: newList,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar search={this.searchProduct} />
        <br />
        <ProductTable data={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
