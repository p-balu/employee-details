import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class About extends Component {

    render() {

        return (

            <div>
                <div className="navLinks">
                    <NavLink exact to="/Employee/home" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Home</NavLink>
                    <NavLink exact to="/Employee/edit" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Edit</NavLink>
                    <NavLink exact to="/Employee/about-us" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>About-us</NavLink>
                    <NavLink exact to="/Employee" className="navLink" activeStyle={{ backgroundColor: 'rgb(0, 194, 178)', borderRadius: '5px' }}>Logout</NavLink>
                </div>
                <h1>Page under Construction</h1>
            </div>

        )
    }
}