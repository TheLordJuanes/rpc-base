import React from 'react'
import Link from 'next/link'

class AddIntegrant extends React.Component {

    email = React.createRef();

    handleChange = event => {

    }

    handleSubmit = event => {
        fetch('http://localhost:8080/',)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                prompt(response);
            })
            .then(function (stories) {
                console.log(stories);
            });
    }

    render() {
        return (
            <div className="input-group">
    
                <input onChange={this.handleChange} type="email" id="email" name="email" className="form-control" placeholder="Email" required /><br />

                <input type="submit" className="btn btn-primary m-auto " value="Add" />

            </div>
        );
    }
}

export default AddIntegrant;