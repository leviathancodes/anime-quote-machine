import React, { Component } from 'react';
import './styles.scss'
import info from './info.js'
import Tweet from './Tweet.js'
import Next from './Next'
import { ReactComponent as QuoteIcon }from './images/quote.svg'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: info,
      quote: "",
      author: "",
      class: ""
    }
    this.nextQuote = this.nextQuote.bind(this);
  }
  nextQuote() {    

    if (document.body.classList.length > 0) {
      document.body.classList.remove(this.state.class);
    }

    const objectIndex = Math.floor(Math.random() * Math.floor(this.state.info.length));
    const object = this.state.info[objectIndex];
    const quoteIndex = Math.floor(Math.random() * Math.floor(object.quotes.length));

    this.setState({
      quote: object.quotes[quoteIndex],
      author: object.name,
      class: object.class
    });
    
    document.body.classList.add(object.class);

  }

  componentDidMount() {
    this.nextQuote();
    
  }

  render() {
    return (
      <div id="quote-box" className="container">

      <div className="row-1">
      <div className="c"><QuoteIcon className="quote-icon"/></div>
      </div>

      <div className="row-2">
      <h4 className="quote" id="text">{this.state.quote}</h4>
      </div>

      <div className="row-3">
      <h5 id="author" className="author">- <i>{this.state.author}</i></h5>
      </div>
      
      <div className="row-4">
        <Tweet quote={this.state.quote} author={this.state.author}/>
        <Next nextQuote={this.nextQuote}/>
        </div>
      </div>
    );
  }
}

export default App;
