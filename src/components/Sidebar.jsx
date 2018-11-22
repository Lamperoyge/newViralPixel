import React, { Component } from 'react'

export default class Sidebar extends Component {
  constructor() {
      super()
      this.state = {
          active: false
      }
      this.dropdownButton = document.querySelector('.burger')
  }

  componentDidMount() {
      this.dropdownButton.addEventListener('click', () => {
          this.setState({
              active: true
          })
      })
  }
  render() {
    if(this.state.active) {
        return (
            <div className = "container-dropdown">
                <ul>
                  <li><a id = "whatWeDoButton" class="button   button--black-outline  button--empty " href="javascript:void(0);" target="_blank"><span>What we do</span></a>
                  </li>
                  <li><a id = "faqButton"  class = "button   button--black-outline  button--empty " href="javascript:void(0);" target="_blank"><span>FAQ</span></a>
                  </li>
                  <li><a id = "contactUsButton" class="button   button--black-outline  button--empty " href="javascript:void(0);" target="_blank"><span>Contact us</span></a>
                  </li>
                </ul>
            </div>
          )
    }
    else {
        return null;
    }
  }
}


