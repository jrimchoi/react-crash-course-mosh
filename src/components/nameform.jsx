import React, { Component } from "react";

class NameForm extends Component {
  state = {};
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.inputNode.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label>
            Name:
            <input
              type="text"
              className="form-control"
              ref={node => (this.inputNode = node)}
            />
          </label>
        </div>
        <div className="form-group row">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NameForm;
