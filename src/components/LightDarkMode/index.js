import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  bgContainerChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const text = isDarkMode ? 'light Mode' : 'Dark Mode'
    const bgColor = isDarkMode ? 'black' : 'light'
    return (
      <div className="container">
        <div className={`black ${bgColor}`}>
          <h1>click To change Mode</h1>
          <button className="btn" onClick={this.bgContainerChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
