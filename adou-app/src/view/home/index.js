import React from "react";

export default class HomeComponent extends React.Component {

  render() {
    const { date } = this.state;

    return <div className="ad-home-view">这是首页</div>;
  }
}
