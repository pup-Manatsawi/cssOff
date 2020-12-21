import React, { Component } from "react";

class TodoItem extends Component {
  state = {
    isCheck: false,
    isEdit: false,
    inputValue: "",
  };
  clickEdit = () => {
    this.setState({ isEdit: true, inputValue: this.props.content });
  };
  render() {
    console.log(this.props.content, this.state.inputValue);
    let islineThrough = this.state.isCheck ? "line-through" : "none";
    let { isEdit, inputValue } = this.state;
    return (
      <div className="todo-item">
        <li className="todo-text">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => this.setState({ isCheck: !this.state.isCheck })}
          />{" "}
          &nbsp;&nbsp;
          {isEdit ? (
            <input
              className="edit-input"
              value={inputValue}
              onChange={(e) => {
                this.setState({ inputValue: e.target.value });
                this.props.editTodo(this.props.content, e.target.value);
              }}
            />
          ) : null}
          <span style={{ textDecoration: islineThrough }}>
            {!isEdit ? this.props.content : null}
          </span>
        </li>
        <div className="todo-btn">
          {!isEdit ? (
            <button
              onClick={this.clickEdit}
              className="btn-edit"
              // disabled="true"
            >
              Edit
            </button>
          ) : null}
          {isEdit ? (
            <button
              onClick={(e) => {
                this.setState({ isEdit: false });
              }}
              className="btn-edit"
            >
              Done
            </button>
          ) : null}
          &nbsp;
          <button
            onClick={(e) => this.props.deleteTodo(this.props.content)}
            className="btn-delete"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
