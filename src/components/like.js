import React, { Component } from 'react';

export class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0
    }

    this.like = this.like.bind(this)
  }

  like() {
    this.setState({
      likeCount: this.state.likeCount + 1
    })
  }

  render() {
    return (
      <div className="flex flex-row text-black rounded-full border-2">
        <button className="bg-grey-light p-3 rounded-l-full outline-none" onClick={this.like}>Like</button>
        <div className="bg-white p-3 rounded-r-full">{this.state.likeCount}</div>
      </div>
    );
  }
}

export default Like;
