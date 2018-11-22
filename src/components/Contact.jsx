import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import validator from 'validator';
export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            description: '',
            phone: '',
            status: false,
            buttonState: true
        }
    }

    sendMessage = () => {
        const name = this.state.name;
        const email = this.state.email;
        const description = this.state.description;
        const phone = this.state.phone;
        const body = JSON.stringify({name, email, description, phone});
        fetch(`/send/contact/${body}`, {
            method: 'POST',
            body: body
        }).then(() => {
                this.setState({
                    name: '',
                    email: '',
                    description: '',
                    phone: '',
                    status: true,
                    
                })
                console.log(this.state)
            }).catch(error => console.log(data, error));
    };


    validate = () => {
        if(validator.isEmail(this.state.email) && !validator.isEmpty(this.state.name) && !validator.isEmpty(this.state.description)) {
            return false
        }
        else {
            return true
        }
    }

  render() {    
    return (
        <FormControl id = "contact-form-react">
                <TextField 
                    label = "Your name"
                    onChange = {ev => this.setState({name: ev.target.value})}
                    required
                    value = {this.state.name}
                    placeholder = "e.g John Doe"
                >
                </TextField>
                <TextField
                    label = "Email"
                    onChange = {ev => this.setState({email: ev.target.value})}
                    required
                    value = {this.state.email}
                    placeholder = "e.g john.doe@viralpixel.studio"
                    
                >
                </TextField>
                <TextField
                    required
                    label = "About your project"
                    onChange = {ev => this.setState({description: ev.target.value})}
                    placeholder = "Your niche, your idea etc"
                    multiline
                    value = {this.state.description}
                    margin = "normal"


                >
                </TextField>
                <Button 
                disabled = {this.validate()}
                style = {{backgroundColor: this.state.status === true? "#1fe5bd" : "rgb(252, 0, 114)", opacity: this.validate() === false? "1" : "0.6"}}onClick = {this.sendMessage} id = "sendButton" variant="contained" text = {this.state.status === true? 'Send' : 'Thank you!'}>
                    {this.state.status === false? 'Send' : 'Thank you!'}
                    <Icon style = {{marginLeft: "0.5em"}}>{this.state.status === false? 'send' : 'done_all'}</Icon>
                </Button>
        </FormControl>
    )
  }
}
