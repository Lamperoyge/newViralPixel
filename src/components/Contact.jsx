import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
export default class Contact extends Component {
  render() {
    return (
        <FormControl id = "contact-form-react">
            <TextField 
                required
                placeholder = "Your name"
                
            >
            </TextField>
            <TextField 
                required
                placeholder = "Your email"
                
            >
            </TextField>
            <TextField
                //required
                placeholder = "Tell us about your project"
                multiline
                margin = "normal"
            >
            </TextField>
            <Button id = "sendButton" variant="contained">
                Send
                <Icon>send</Icon>
            </Button>
        </FormControl>
    )
  }
}
