import React, {Component} from 'react';
import './Form.css'

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

    // componentDidMount(){
    //     fetch('http://localhost:8000/')
    //       .then(response => response.json())
    //       .then(console.log)
    //   }
    
    
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
                    <h1>Thank You for Registering</h1>
                    <h2>We will keep sending you the score updates !</h2>
                </div>
            )
        }else{
            return(
                <div className="main">
                    <form onSubmit={this.handleSubmit} className="form">
                        {/* <p>Fill out the details !</p>  */}
                        <div className="one">
                            <label>Team Name</label>
                            <input 
                                type="text" 
                                value={this.state.teamName} 
                                name="teamName" 
                                placeholder="India"
                                required={this.state.required} 
                                onChange={this.handleChange} 
                            />
                            <br />
                        </div>
                        <div className="two">
                            <label>Your WhatsApp Number</label>
                            <input 
                                type="text" 
                                value={this.state.whatsappNumber} 
                                name="whatsappNumber" 
                                placeholder="eg +91 9876543210"
                                required={this.state.required} 
                                onChange={this.handleChange} 
                            />
                        </div>    
                        <div className="three">
                            <button typr="submit">Submit</button>
                        </div>
                        
                    </form>
                </div>
                
            )
        }
    }
}

export default Form;