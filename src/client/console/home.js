import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Home extends Component {

    render() {

        return (

            <div>
                <div className="navLinks">
                    <NavLink exact to="/Employee/home" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Home</NavLink>
                    <NavLink exact to="/Employee/edit" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Edit</NavLink>
                    <NavLink exact to="/Employee/about-us" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>About-us</NavLink>
                    <NavLink exact to="/Employee" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Logout</NavLink>
                </div>
                <div className="employeeData">
                    <div className="employeeData1">
                        <p> <b className="boldd">Employee_id:</b><span>{this.props.profileData[0].employee_id}</span></p>
                        <p> <b className="boldd">Name:</b><span>{this.props.profileData[0].name}</span></p>
                        <p> <b className="boldd">UserName:</b><span>{this.props.profileData[0].username}</span></p>
                        <p> <b className="boldd">Gender:</b><span>{this.props.profileData[0].gender}</span></p>
                        <p> <b className="boldd">Email:</b><span>{this.props.profileData[0].email}</span></p>
                    </div>
                    <div className="employeeData2">
                        <p> <b className="boldd">Date of Birth:</b><span>{this.props.profileData[0].dob}</span></p>
                        <p><b className="boldd">Salary:</b> <span>{this.props.profileData[0].salary} Dollars</span></p>
                        <p> <b className="boldd">Company:</b><span>{this.props.profileData[0].company}</span></p>
                        <p><b className="boldd">Password:</b> <span>{this.props.profileData[0].password}</span></p>
                    </div>
                </div>

            </div>

        )
    }
}
Home.propTypes = {
    profileData: PropTypes.array.isRequired
}
function mapStateToProps(state) {
    return {
        profileData: state.profileData
    }
}
export default connect(mapStateToProps)(Home)