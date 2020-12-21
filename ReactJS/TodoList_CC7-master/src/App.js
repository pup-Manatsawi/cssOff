import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import logo from "./sort-alpha-down-solid.svg";
// import TodoListHook from "./components/TodoListHook";

class App extends Component {
  state = {
    contents: [],
  };
  addTodo = () => {
    let contentState = [...this.state.contents];
    let addTodoText = prompt("Enter a todo");
    if (addTodoText === null || addTodoText === "") return;
    contentState.push(addTodoText);

    this.setState({ contents: contentState });
  };
  deleteTodo = (content) => {
    let contentState = [...this.state.contents];
    let index = contentState.indexOf(content);
    contentState.splice(index, 1);
    this.setState({ contents: contentState });
  };
  editTodo = (content, newContent) => {
    // let contentState = [...this.state.contents];
    // let index = contentState.indexOf(content);
    // let editText = prompt("Enter edit todo");
    // contentState[index] = editText;
    // this.setState({ contents: contentState });
    let contentState = [...this.state.contents];
    let index = contentState.indexOf(content);
    // let editText = prompt("Enter edit todo");
    contentState[index] = newContent;
    this.setState({ contents: contentState });
  };
  sortTodo = () => {
    let contentState = [...this.state.contents];
    contentState = contentState.sort();
    this.setState({ contents: contentState });
  };
  render() {
    console.log(this.state.contents);
    return (
      <div className="App">
        {/* <TodoListHook /> */}
        <header className="App-header">
          <h1>To-Do</h1>
          <button onClick={() => this.sortTodo()} className="btn-sort">
            <img src={logo} className="App-logo" alt="logo" />
            &nbsp; Sort
          </button>
        </header>
        <section className="App-content">
          <ul className="todo-container">
            {this.state.contents.map((content, idx) => (
              <TodoItem
                key={idx}
                content={content}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              />
            ))}
          </ul>
        </section>
        <footer className="App-footer">
          <button onClick={() => this.addTodo()} className="btn-add">
            + Add a to-do
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
