import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            teamName: "",
            whatsappNumber: "",
            required : true,
            condition : false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            condition : true,
        })
    }
    
    render() {
        // const cond = this.
        // console.log("before ", this.state.condition)
        if(this.state.condition){
            return(
                <div className="trueCondition">
                    
                </div>
            )
        }else{
            return(
                <form onSubmit={this.handleSubmit} className="form"> 
                    <label>"Team Name"</label>
                    <input 
                        type="text" 
                        value={this.state.teamName} 
                        name="teamName" 
                        placeholder="India"
                        required={this.state.required} 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <label>whatsappNumber</label>
                    <input 
                        type="text" 
                        value={this.state.whatsappNumber} 
                        name="whatsappNumber" 
                        placeholder="eg +91 9876543210"
                        required={this.state.required} 
                        onChange={this.handleChange} 
                    />
                    <button typr="submit">Submit</button>
                    {/* {console.log(this.state.condition)} */}
                </form>
            )
        }
    }
}

export default Form;