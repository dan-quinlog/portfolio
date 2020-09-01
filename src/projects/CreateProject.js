import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../store/actions/projectActions";
import { Redirect } from "react-router-dom";

import RichTextEditor from "../forms/rich-text-editor";

import DropzoneComponent from "react-dropzone-component";
import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

class CreateProject extends Component {
  state = {
    type: "project",
    title: "",
    content: "",
    image: "",
  };
  handleRichTextEditorChange = (content) => {
    this.setState({ content });
  }
  componentConfig() {
    return {
      iconFileTypes: [".jpg", ".png"],
      showFileTypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }
  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }
  handleThumbDrop() {
    return {
      addedfile: (file) => this.setState({ image: file }),
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h5>create project</h5>
          <div className="input-field">
            <label htmlFor="type">type</label>
            <select name="type" id="type" onChange={this.handleChange}>
              <option>project</option>
              <option>blog</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <RichTextEditor
              handleRichTextEditorChange={this.handleRichTextEditorChange}
            />

            {/* <label htmlFor="content">content</label>
            <textarea
              className="text-area"
              id="content"
              onChange={this.handleChange}
            ></textarea> */}
            <div className="image-uploader">
              <DropzoneComponent
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleThumbDrop()}
              />
            </div>
          </div>
          <div className="input-field">
            <button className="btn">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
