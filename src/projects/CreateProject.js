import React, { Component } from "react";
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';

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
    this.props.createProject(this.state)
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);
