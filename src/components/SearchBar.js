import React from 'react';

class SearchBar extends React.Component {
  state = {
    name: '',
    stocked: false,
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;
    if (type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.search(this.state);
      }
    );
  };
  render() {
    return (
      <form>
        <label>Search</label>
        <br />
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <br />
        <input type="checkbox" name="stocked" onChange={this.handleChange} />
        Show Products in Stock
      </form>
    );
  }
}

export default SearchBar;
