import React, { Component } from "react";
import "../styles/App.css";

import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

class App extends Component {
  render() {
    return (
      <div className="row">
        <h1>Books N' Roses: Appetite for Instruction</h1>
        <div className="main" style={{ display: "flex", margin: "2em" }}>
          <BookList style={{ flex: 1 }} />
          <BookDetail style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}

export default App;
