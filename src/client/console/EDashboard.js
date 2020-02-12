import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class EDashboard extends Component {
    handleButtonClick() {
        console.log(this.props, 'props')
        this.props.handleLoggedInStatus(false)
        // console.log( 'child working', handleLoggedInStatus )
        // this.props.handleLoggedInStatus(false)
    }
    render() {

        return (
            <div>
                <div className="nav">
                    <ul className="navLinks">
                        <NavLink exact to="/Employee/home" className="navLink"><li>Home</li></NavLink>
                        <NavLink to="/Employee/edit" className="navLink"><li>Edit Profile</li></NavLink>
                        <NavLink to="/Employee/about-us" className="navLink"><li>About us</li></NavLink>
                        <li><button className="primary" onClick={this.handleButtonClick.bind(this)}>Logout</button></li>
                    </ul>
                </div>
                <div className="employeeData">
                    <div className="employeeData1">
                        <p> <b className="boldd">Employee_id:</b><span>{this.props.profileData.employee_id}</span></p>
                        <p> <b className="boldd">Name:</b><span>{this.props.profileData.name}</span></p>
                        <p> <b className="boldd">UserName:</b><span>{this.props.profileData.username}</span></p>
                        <p> <b className="boldd">Gender:</b><span>{this.props.profileData.gender}</span></p>
                        <p> <b className="boldd">Email:</b><span>{this.props.profileData.email}</span></p>
                    </div>
                    <div className="employeeData2">
                        <p> <b className="boldd">Date of Birth:</b><span>{this.props.profileData.dob}</span></p>
                        <p><b className="boldd">Salary:</b> <span>{this.props.profileData.salary} Dollars</span></p>
                        <p> <b className="boldd">Company:</b><span>{this.props.profileData.company}</span></p>
                        <p><b className="boldd">Password:</b> <span>{this.props.profileData.password}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}
// EDashboard.propTypes = {
//     profileData: PropTypes.array.isRequired
// }
// function mapStateToProps(state) {
//     return {
//         profileData: state.profileData
//     }
// }
export default EDashboard