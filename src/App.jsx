import React, { Component } from 'react'
import { render } from "react-dom";
import ContactForm from './components/Contact';
import Scroll from './Scroll';
new Scroll().init();

export default class App extends Component {
  render() {
    return (
      <div>
        <ContactForm />
      </div>
    )
  }
}
render(<App />, document.getElementById("contact-form"));