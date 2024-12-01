import React, { Component } from 'react'
import axios from 'axios'

export default class Add extends Component {
  state = {
    appVersion: 'UI version is V4α, Backend API version is loading...'
  }

  async componentDidMount() {
    const G = window.g
    //  this.setState({ appVersion: 'v99' })
    // let { appVersion } = this.state
    const response = await axios.get(G.url + '/version');
    this.setState({ appVersion: response.data })


  }
  render() {
    return (
      <div class="ui green small header">
        {this.state.appVersion}
      </div>
    )
  }
}
