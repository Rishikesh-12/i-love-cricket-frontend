import React from 'react';
import './Steps.css'

const Steps = () => {
    return(
        <div className="mainSteps">
            <h3>Just follow these Steps: </h3>
            <ol>
                <li>Save "+1 415-523-8886" to your phone directory (this is your bot's number).</li>
                <li>Open Whatsapp and send "join these-somebody" to the bot.</li>
                <li>If you recieve a info message then you are all set, for else cases try above steps again or contact developer ! </li>
            </ol>     
        </div>
    )

}

export default Steps;