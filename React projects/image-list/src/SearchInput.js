import React from "react";

class SearchInput extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  //   constructor() {
  //     super();
  //     this.onFormSubmit = this.onFormSubmit.bind(this);
  //   }
  state = { entry: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
    // console.log(this.state.entry);
  };

  //   https://pixabay.com/api/?key=34224149-cc5182f14c03b2525358c41dc&q=yellow+flowers&image_type=photo
  render() {
    return (
      <div className="ui-segment">
        <form onSubmit={this.onFormSubmit} className="ui-form">
          <div className="field">
            <div
              className="ui massive icon input"
              style={{ margin: "2rem 5%", width: "90%" }}
            >
              <input
                type="text"
                placeholder="Search....."
                onChange={(event) => {
                  this.setState({ entry: event.target.value });
                }}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
