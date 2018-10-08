import React, { Component } from 'react'

class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => (
    this.setState(state => {
      state.mood = state.mood === 'happy' ? 'sad' : 'happy'
      return state
    })
  )

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent