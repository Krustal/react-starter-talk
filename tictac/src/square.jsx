import React, { Component } from 'react';

export default class Square extends Component {
  constructor(props) {
    super();
    this.clicked = this.clicked.bind(this);
  }

  render() {
    return (
      <div className="square" onClick={this.clicked}>
        {this.props.player}
      </div>
    )
  }

  clicked(evt) {
    evt.preventDefault()
    this.props.onClick(this.props.x, this.props.y);
  }
}
