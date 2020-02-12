import React, { Component } from 'react';
export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            errors: "",
            success: "",
            profile: {
                employee_id: '',
                name: "",
                username: "",
                gender: '',
                email: "",
                password: "",
                dob: "",
                salary: "",
                company: "",

            }
        }
    }
    handleRedirect(value) {
        this.setState({ redirect: false })
    }
    handleChange = (event) => {
        const { profile } = this.state;
        const value = event.target.value;
        this.setState({ profile: { ...profile, [event.target.name]: value } })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true,

            errors: [],
            success: []
        })
        console.log(this.state.users);
        const { profile } = this.state;
        fetch(`http://localhost:4000/profiles/add?employee_id=${profile.employee_id}&name=${profile.name}&username=${profile.username}&gender=${profile.gender}&
        email=${profile.email}&password=${profile.password}&dob=${profile.dob}&salary=${profile.salary}&company=${profile.company}`, {
            method: 'POST',

        })
            .then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    this.setState({
                        success: "Registration Success:)"
                    })
                }
                else {
                    this.setState({
                        errors: "Username or Email or Employee_id already exists"
                    })
                }
            })

    }
    componentDidMount() {
        if (this.state.redirect !== false)
            this.setState({ redirect: false })
    }

    handleClick(event) {
        console.log("working");
        this.props.handleRedirect(false)
        event.preventDefault();
    }
    render() {
        const { submitted, success, errors } = this.state;
        return (
            <div>
                <button className="primary1" onClick={this.handleClick.bind(this)}>Home</button>
                <form onSubmit={this.handleSubmit.bind(this)} className="FormField">
                    <p className="hed"><b>Enter Employee Details</b></p>
                    {submitted && success.length >= 1 && <span className="reg_Success">{success}</span>}
                    {submitted && errors.length >= 1 && <span className="reg_error"> {errors}</span>}
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Employee_ID" value={this.state.profile.employee_id}
                        onChange={this.handleChange} name="employee_id" required />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Name" value={this.state.profile.name}
                        onChange={this.handleChange} name="name" required />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Username" value={this.state.profile.username}
                        onChange={this.handleChange} name="username" required />
                    <select className="AdminField__Input" name="gender" default="Select Gender"
                        value={this.state.profile.gender} onChange={this.handleChange}
                        placeholder="Select Gender" required>
                        <option value=''>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                    </select>
                    <input type="email" className="AdminField__Input"
                        placeholder="Enter emailid" value={this.state.profile.email}
                        onChange={this.handleChange} name="email" required />
                    <input type="password" className="AdminField__Input"
                        placeholder="Enter password" value={this.state.profile.password}
                        onChange={this.handleChange} name="password" required />
                    <input type="date" className="AdminField__Input"
                        placeholder="Enter dob" value={this.state.profile.dob}
                        onChange={this.handleChange} name="dob" required />
                    <input type="number" className="AdminField__Input"
                        placeholder="Enter Salary in Dollars" value={this.state.profile.salary}
                        onChange={this.handleChange} name="salary" required />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Company" value={this.state.profile.company}
                        onChange={this.handleChange} name="company" required />
                    <input type="submit" value="Submit" className="FormButton" />
                </form>
            </div>
        );
    }
}
