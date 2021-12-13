import React from 'react';
import Link from 'next/link'

class GroupForm extends React.Component {

    name = React.createRef();

    handleChange = event => {

    }

    handleSubmit = event => {

    }

    render() {
        return (

            <main>

                <h2 className="text-center">New Team Registration</h2><br />

                <form className="w-50 mx-auto p-2" method="POST" action = "http://localhost:8080/createTeam">

                    <br />

                    <div className="form-group">

                        <label htmlFor="name">Name:</label>

                        <input onChange={this.handleChange} type="text" className="form-control" id="name" name="name" placeholder="Team name" required /><br /><br />

                        <input type="submit" className="btn btn-primary" value="Save" /> &nbsp;&nbsp;

                        <Link href="/">

                            <a className="btn btn-primary" role="button">Cancel</a>

                        </Link>

                        <br /><br />

                    </div>

                </form>

            </main>
        )
    }
}

export default GroupForm;