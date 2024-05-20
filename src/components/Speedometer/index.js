// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBreakButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="speed-text">Speed is {speed} mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="accelerate-button button"
              type="button"
              onClick={this.onAccelerateButton}
            >
              Accelerate
            </button>
            <button
              className="apply-break-button button"
              type="button"
              onClick={this.onApplyBreakButton}
            >
              Apply Breake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
