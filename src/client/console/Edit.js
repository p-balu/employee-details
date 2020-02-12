import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Edit extends Component {
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="navLinks">
                    <NavLink exact to="/Employee/home" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Home</NavLink>
                    <NavLink exact to="/Employee/edit" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Edit</NavLink>
                    <NavLink exact to="/Employee/about-us" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>About-us</NavLink>
                    <NavLink exact to="/Employee" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Logout</NavLink>
                </div>
                <form>
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Employee_ID" value={this.props.profileData[0].employee_id}
                        onChange={this.handleChange} name="employee_id" />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Name" value={this.props.profileData[0].name}
                        onChange={this.handleChange} name="name" />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Username" value={this.props.profileData[0].username}
                        onChange={this.handleChange} name="username" />
                    <select className="AdminField__Input" name="gender"
                        value={this.props.profileData[0].gender} onChange={this.handleChange}
                        placeholder="Select Gender" >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                    </select>
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter emailid" value={this.props.profileData[0].email}
                        onChange={this.handleChange} name="email" />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter password" value={this.props.profileData[0].password}
                        onChange={this.handleChange} name="password" />
                    <input type="" className="AdminField__Input"
                        placeholder="Enter dob" value={this.props.profileData[0].dob}
                        onChange={this.handleChange} name="dob" />
                    <input type="number" className="AdminField__Input"
                        placeholder="Enter Salary in Dollars" value={this.props.profileData[0].salary}
                        onChange={this.handleChange} name="salary" />
                    <input type="text" className="AdminField__Input"
                        placeholder="Enter Company" value={this.props.profileData[0].company}
                        onChange={this.handleChange} name="company" />
                    <input type="submit" value="Submit" className="FormButton" />
                </form>
            </div>
        )
    }
}

Edit.propTypes = {
    profileData: PropTypes.array.isRequired
}
function mapStateToProps(state) {
    return {
        profileData: state.profileData
    }
}
export default connect(mapStateToProps)(Edit)