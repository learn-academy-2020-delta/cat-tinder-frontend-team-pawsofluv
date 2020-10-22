import React, { Component } from 'react';

export default class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    };
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
    console.log(this.state.likes)
    console.log(this.props.likes)
  };



  render() {

    return <button onClick={this.addLike} id={this.props.catId}>Like Me: {this.state.likes} </button>

  }

}