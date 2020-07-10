import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./homepage/homepage";
import Detail from "./homepage/detail";

function Pages(props) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <Home setData={props.setData} history={history} />
        )}
      />
      <Route
        exact
        path="/details"
        render={() => <Detail data={props.data} />}
      />
    </Switch>
  );
}

class App extends React.Component {
  state = {
    data: null,
  };
  setData = (data) => {
    this.setState({ data });
  };
  render() {
    return (
      <div>
        <Pages data={this.state.data} setData={this.setData} />
      </div>
    );
  }
}

export default App;
