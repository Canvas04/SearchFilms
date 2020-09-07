import React from "react";
import ReactDom from "react-dom";
import { Input } from "antd";
import { Card } from "antd";
function App() {
  return (
    <div>
      <Input placeholder="Type to search..." />
      <Card title="Hi" />
    </div>
  );
}
ReactDom.render(<App />, document.querySelector("#root"));

