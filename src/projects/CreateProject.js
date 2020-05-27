import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h5>create project</h5>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">content</label>
            <textarea
              className="text-area"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
