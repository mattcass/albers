import React, { Component } from 'react';
import Transition from 'react-transition-group/CSSTransitionGroup';

const colors = [
  ['#06846F', '#30B14D', '#0187C6', '#DCBB18'],
  ['#DCBB18', '#0187C6', '#06846F', '#30B14D'],
  ['#004964', '#186761', '#198466', '#869A3B'],
  ['#F0AF09', '#C90E55', '#BC014B', '#E97917'],
  ['#F74D2C', '#B04941', '#376B78', '#F99320'],
  ['#1D1E22', '#364043', '#337163', '#35864D'],
  ['#36A0A6', '#48B660', '#427E42', '#1D1F1E'],
  ['#C7C7C5', '#003B9E', '#FAF9F4', '#4BADEF'],
  ['#00B2A1', '#006B7B', '#0047A6', '#0047A6'],
  ['#DFD2C6', '#F2E1B3', '#F2E1B3', '#FFEE66'],
  ['#0153A7', '#515251', '#914E10', '#BF7B1A'],
  ['#5F0F04', '#5F0F04', '#13150E', '#000000'],
  ['#008194', '#00AB48', '#007755', '#395B64'],
  ['#F8F2EC', '#0081B7', '#B43DA8', '#D62233'],
  ['#8E0000', '#F90000', '#F9921F', '#FBFF4D']
];

class App extends Component {
  state = {
    colors: colors[Math.floor(Math.random() * colors.length)]
  };

  handleClick = () => {
    this.setState({
      colors: colors[Math.floor(Math.random() * colors.length)]
    });
  };

  render() {
    return (
      <div
        className="app"
        style={{ background: this.state.colors[0] }}
        onClick={this.handleClick}
      >
        <Transition
          transitionName="animate"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <div
            className="josef"
            key={this.state.colors[1]}
            style={{ background: this.state.colors[1] }}
          >
            <div
              className="albers"
              style={{ background: this.state.colors[2] }}
            >

              <div
                className="interaction"
                style={{ background: this.state.colors[3] }}
              />
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}

export default App;
