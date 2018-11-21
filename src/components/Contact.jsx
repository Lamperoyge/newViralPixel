import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            description: '',
            phone: '',
            status: false
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
                    status: true
                })
                console.log(this.state)
            }).catch(error => console.log(data, error));
    };


  render() {    
    return (
        <FormControl id = "contact-form-react">
            <TextField 
                onChange = {ev => this.setState({name: ev.target.value})}
                required
                value = {this.state.name}
                placeholder = "Your name"
            >
            </TextField>
            <TextField
                onChange = {ev => this.setState({email: ev.target.value})}
                required
                value = {this.state.email}
                placeholder = "Your email"
                
            >
            
            </TextField>
            <TextField
                onChange = {ev => this.setState({phone: ev.target.value})}
                required
                placeholder = "Your phone"
                value = {this.state.phone}
                
            >
            </TextField>
            <TextField
                //required
                onChange = {ev => this.setState({description: ev.target.value})}
                placeholder = "Tell us about your project"
                multiline
                value = {this.state.description}
                margin = "normal"
                
            >
            </TextField>
                <Button style = {{backgroundColor: this.state.status === true? "#1fe5bd" : "rgb(252, 0, 114)"}}onClick = {this.sendMessage} id = "sendButton" variant="contained" text = {this.state.status === true? 'Send' : 'Thank you!'}>
                    {this.state.status === false? 'Send' : 'Thank you!'}
                    <Icon style = {{marginLeft: "0.5em"}}>{this.state.status === false? 'send' : 'done_all'}</Icon>
                </Button>
        </FormControl>
    )
  }
}
