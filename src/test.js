import React, { Component } from "react";

export function Test1() {
  return <div>This is a functional component</div>;
}

export class Test2 extends Component {
  render() {
    return <div>This is a class component</div>;
  }
}
