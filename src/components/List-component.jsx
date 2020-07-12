import React from "react";

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.func = this.props.func;
    this.label = this.props.label;
    this.isImportant = this.props.isImportant;
    this.state = {
      done: false
    };
  }

  updateDone(e) {
    if (this.state.done === false) {
      this.setState({ done: true });
      e.target.classList.add("doneElement");
    } else {
      this.setState({ done: false });
      e.target.classList.remove("doneElement");
    }
  }

  render() {
    return (
      <div className="list-group-item row">
        <span
          key={this.id}
          className={
            this.isImportant
              ? "important list-element col-sm"
              : "list-element col-sm"
          }
          onClick={e => {
            this.updateDone(e);
          }}
        >
          {this.label}
        </span>
        {this.func ? (
          <i className={this.isImportant ? "fa fa-heart col-1" : "fa fa-heart-o col-1"}
            aria-hidden="true"
          />
        ) : (
          ""
        )}
        <i className="fa fa-trash-o" aria-hidden="true" />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    let list = this.props.data.map((item, key) => {
      item.id = key;
      item.func = this.props.func;
      return <Element {...item} />;
    });
    return <ul className="list-group">{list}</ul>;
  }
}

export default List;
