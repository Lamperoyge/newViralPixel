import React, { Component } from 'react'
import { render } from "react-dom";
import ContactForm from './components/Contact';
import Scroll from './Scroll';
import Sidebar from './components/Sidebar'
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
// render(<Sidebar />, document.getElementById('sidebar'));
render(<App />, document.getElementById("contact-form"));