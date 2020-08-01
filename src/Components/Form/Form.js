import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            teamName: "",
            whatsappNumber: "",
            required : true,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form> 
                <input 
                    type="text" 
                    value={this.state.teamName} 
                    name="teamName" 
                    placeholder="First Name"
                    required={this.state.required} 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.whatsappNumber} 
                    name="whatsappNumber" 
                    placeholder="Last Name"
                    required={this.state.required} 
                    onChange={this.handleChange} 
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;