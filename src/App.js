import React, { Component } from 'react';
import './App.css';
import Validation from "./Components/ValidationComponent";
import Char from "./Components/CharComponent";

class App extends Component {
  state = {
    inputText: ""
  };

  inputHandler = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  clickHandler = (index) => {
    let paragraph = this.state.inputText.split(""); // Splits the inputText with each character
    paragraph.splice(index, 1); // Splices the array starting from the index to the next character
    let newParagraph = paragraph.join(""); // Joins all elements of an array into a string
    this.setState({
      inputText: newParagraph
    });
  }

  render() {
    // Split each character and map (copy into a new array) them with an ES6 syntax
    const charBlock = this.state.inputText.split("").map((char, index) => {
      return <Char 
        key={index}
        character={char}
        click={() => this.clickHandler(index)}
        />;
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/>
        <input
          value={this.state.inputText}
          onChange={this.inputHandler}
          type="text" />
        <Validation 
          inputLength={this.state.inputText.length} />
        {charBlock}
      </div>
    );
  }
}

export default App;
