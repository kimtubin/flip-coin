import React, { Component } from "react";
import { choice } from "./helpers";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "head", src: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        src: "https://tricksupply.com/wp-content/uploads/2019/10/s-l1600.jpg"
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFlip: 0,
      nTail: 0,
      nHead: 0
    };
  }

  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      let newState = {
        ...st,
        curCoin: newCoin,
        nFlip: st.nFlip + 1
      };
      if (newCoin.side === "head") {
        newState.nHead += 1;
      } else {
        newState.nTail += 1;
      }
      return newState;
    });
  };

  handleClick = (e) => {
    this.flipCoin();
  };

  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>
        {this.state.curCoin ? <img src={this.state.curCoin.src} /> : null}
        <button onClick={this.handleClick}>FLIP</button>
        <div className="count-container">
          <span>
            {this.state.nFlip} flip
            {this.state.nFlip === 0 || this.state.nFlip === 1 ? "" : "s"}
          </span>
          <span>
            {this.state.nTail} tail
            {this.state.nTail === 0 || this.state.nTail === 1 ? "" : "s"}
          </span>
          <span>
            {this.state.nHead} head
            {this.state.nHead === 0 || this.state.nHead === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    );
  }
}

export default CoinContainer;
