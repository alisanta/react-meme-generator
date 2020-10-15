import React, { Component } from "react";
import Button from "react-bootstrap/Button";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    imgURL: "http://i.imgflip.com/1bij.jpg",
    allMeme: []
  };
  /*
  constructor() {
    super();
    this.
    //this.handleChange = this.handleChange.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }
*/
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((datajson) => {
        const { memes } = datajson.data;
        this.setState({ allMeme: memes });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    console.log(this.state);
    const randomInt = getRandomInt(this.state.allMeme.length);
    console.log(randomInt);
    this.setState({ imgURL: this.state.allMeme[randomInt].url });
  };

  render() {
    return (
      <div>
        <h1>MEME GENERATOR SECTION</h1>
        <form>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <br />
          <Button variant="primary" onClick={this.handleClick}>
            Gen
          </Button>
        </form>
        <div id="meme" className="meme">
          <img src={this.state.imgURL} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
