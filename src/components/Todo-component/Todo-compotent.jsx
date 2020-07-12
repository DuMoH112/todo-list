import React from "react";
import "./style.css";
import List from "../List-component";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = "Напиши задачу";
    this.state = {
      data: this.props.data,
      value: ""
    };
    this.updateData = this.updateData.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  updateData(e) {
    e.preventDefault();
    if (this.state.value === "") {
      return;
    }

    const newItem = {
      label: this.state.value,
      isImportant: false
    };

    this.setState(state => ({
      data: state.data.concat(newItem),
      value: ""
    }));
  }

  changeInput(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const title = <h1 className="title">Todo List</h1>;
    const addNewElement = (
      <div>
        <input
          className="input-append"
          type="text"
          placeholder={this.placeholder}
          id="inputTodo"
          onChange={this.changeInput}
          value={this.state.value}
        />
        <button className="btn btn-outline-primary" onClick={this.updateData}>
          Add
        </button>
      </div>
    );

    return (
      <div id="Todo">
        {title}
        {addNewElement}
        <List data={this.state.data} func="todo" />
      </div>
    );
  }
}

export default Todo;
