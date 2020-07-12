import React from "react";
import "./style.css";
import List from "../List-component";

class Done extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.placeholder = "Напиши сюда что-нибудь пожалуйста";
  }

  render() {
    const title = <h1 className="title">Done</h1>;
    const search = (
      <input className="search" type="text" placeholder={this.placeholder} />
    );
    return (
      <div id="Done">
        {title}
        {search}
        <List data={this.data} />
      </div>
    );
  }
}

export default Done;
