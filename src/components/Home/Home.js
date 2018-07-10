import React, { Component } from 'react'

export default class Home extends Component {

    render() {

    let subHeading = "DIY everyday carry biodiesel 90's direct trade iPhone. Kogi tilde coloring book, meh knausgaard pitchfork chartreuse pop-up keffiyeh lo-fi stumptown deep v live-edge."

    return (
      <div className="container">
        <h1 className="title">{this.props.headingText}</h1>
        <h3 className="subtitle">{ subHeading } </h3>
      </div>
    )
  }
}
