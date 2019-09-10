import React from 'react';
// import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/";
import IconCard from "./components/IconCard";
import Icons from "./icons.json";
// import Jumbotron from "./components/Jumbotron";

const shuffleArray = (array) => {
  let counter = array.length;
//while there are elements in the array
while (counter > 0) {
  let index = Math.floor(Math.random() * counter);
  //decrease counter by 1
  counter--;
  let temp = array[counter];
  array[counter] = array[index];
  array[index] = temp;
}
  return array;
};


class App extends React.Component {
  // Setting this.state for images and scores
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,
    gameOver: false
  };



  // When the page loads and the component mounts,
  // display starting message
  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }

  //When a player gets clicked,
  //increase points and add id of element to array.
  clickedPlayer = (id) => {
    console.log("Picture clicke with id: ${id}");
    if(!this.state.clicked.includes(id)) {
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      })
    } else {
      this.resetGame();
    }
}
  
//When the user makes a new click, increment the points by 1
// and check if user has won
pointIncrease = () => {
  let score = this.state.currentScore + 1;
  if (score === this.state.Icons.length) {
    this.setState({
      topScore: score,
      currentScore: 0,
      clicked: [],
      Icons,
      gameOver: false
    });
  } else {
    this.setState({
      currentScore: score,
      result: "Correct!"
    });
  }
    this.resetIconArray();
}

// reset the game when the user chooses a duplicate
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: "You Lose",
      clicked: [],
      Icons,
      gameOver: true
    });
    console.log('Game Over?', this.state.gameOver);
    this.resetIconArray();   
  }

  //set the array to be mapped to a new shuffled version
  resetIconArray = () => {
    let newScramble = shuffleArray(Icons);
    this.setState({Icons: newScramble})
  }

  render () {
      return (
        <div className="container">
          <Navbar topScore={this.state.topScore} currentScore={this.state.result}/>
          <div className='mainStyle'>
          {this.state.Icons.map(icon => (
        <IconCard
          id={icon.id}
          image={icon.image}t
          clickedPlayer={this.clickedPlayer}
        />
        ))}

        </div>
        </div>
      );
  }
};




export default App;
