import React, { Component } from 'react';
import '../App.js';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
//import Employee from '../client/Employee.js';

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loggedInStatus: false,
            errors: '',
            submitted: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        if (this.state.loggedInStatus !== false) {
            this.setState({ loggedInStatus: false })


        }
    }

    checkIfUserExists() {
        console.log('working db  function')
    }

    handleLoggedInStatus(value) {
        this.setState({ loggedInStatus: false })
        this.setState({
            username: '',
            password: ''
        })
    }

    handleSubmit(event) {
        this.setState([{
            submitted: true
        }])
        const { username, password } = this.state
        console.log('working', username, password)
        if (username === 'admin' && password === 'admin') {
            console.log(' status *')
            this.setState({ loggedInStatus: true })
            this.checkIfUserExists();
        }
        else {
            console.log("User doesnot exists")
            this.setState({
                errors: "User doesn't Exist"
            })
        }
    }


    render() {
        const { loggedInStatus, submitted, errors } = this.state
        return (
            <div>
                {
                    loggedInStatus === false ?
                        <div>
                            <form onSubmit={this.handleSubmit} className="AdminFields">
                                <p className="hee"><b>Admin Login</b></p>
                                <p><b> Username=admin | Password=admin
                                    </b></p>
                                {submitted && errors.length > 0 && <span className="error">
                                    {errors}
                                </span>}
                                <div className="AdminField">
                                    <label className="AdminField__Label" htmlFor="username"><b>Username</b></label>
                                    <input type="username" id="username" className="AdminField__Input"
                                        placeholder="Enter your Username" name="username" value={this.state.username} onChange={(event) =>
                                            this.setState({ username: event.target.value })} />
                                </div>

                                <div className="AdminField">
                                    <label className="AdminField__Label" htmlFor="password"><b>Password</b></label>
                                    <input type="password" id="password" className="AdminField__Input"
                                        placeholder="Enter your password" name="password" value={this.state.password} onChange={event =>
                                            this.setState({ password: event.target.value })} />
                                </div>

                                <div className="AdminField">
                                    <button className="AdminField__Button mr-20">Sign In</button>
                                </div>
                                <div className="linkText">
                                    <span>Are you an employee  </span>
                                    <Link to="/Employee" className="link">Click here>></Link>
                                </div>
                            </form>

                        </div> : <div>
                            <Dashboard
                                handleLoggedInStatus={this.handleLoggedInStatus.bind(this)} />
                        </div>
                }
            </div>
        );
    }

}


