import React, { Component } from 'react';
import EDashboard from './EDashboard.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions.js'
class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileData: [],
            username: '',
            password: '',
            loggedInStatus: false,
            submitted: false,
            errors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        if (this.state.loggedInStatus !== false) {
            this.setState({ loggedInStatus: false })

        }
    }
    handleLoggedInStatus(value) {
        this.setState({ loggedInStatus: false })
        this.setState({
            name: '',
            password: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
        const { username, password } = this.state;
        fetch(`http://localhost:4000/profiles?username=${username}&password=${password}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    console.log("logged in")
                    this.setState({
                        loggedInStatus: true,
                        profileData: res.data[0]
                    })
                    this.props.actions.createProfileData(this.state.profileData)
                }
                else if (res.code === 206) {
                    console.log("login Unsuccessfull")
                    this.setState({
                        errors: "Incorrect Username or Password"
                    })
                }
                else {
                    console.log("User doesnot exists")
                    this.setState({
                        errors: "User doesn't Exist"
                    })
                }
            })
    }
    render() {
        const { loggedInStatus, submitted, errors } = this.state
        return (
            <div>
                {
                    loggedInStatus === false ?
                        <div>
                            <form onSubmit={this.handleSubmit} className="AdminFields">
                                <p className="hee"><b>Employee Login</b></p>
                                {submitted && errors.length >= 0 && <span className="error">
                                    {errors}
                                </span>}
                                <div className="AdminField">
                                    <label className="AdminField__Label" htmlFor="Username"><b>UserName</b></label>
                                    <input type="text" id="usernsme" className="AdminField__Input"
                                        placeholder="Enter your UserName" username="username" value={this.state.username} onChange={(event) =>
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
                                    <span>Are you an admin  </span>
                                    <Link to="/" className="link" >Click here>></Link>
                                </div>
                            </form>

                        </div> : <div>
                            <EDashboard
                                handleLoggedInStatus={this.handleLoggedInStatus.bind(this)}
                                profileData={this.state.profileData} />
                        </div>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        profileData: state.profileData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee)


