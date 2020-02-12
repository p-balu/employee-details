import React, { Component } from 'react';
import Add from './Add.jsx';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: {
                name: 'asc',
            }

        }
    }
    // sortBy(key) {

    //     this.setState({
    //         profiles: data.sort((a, b) => (
    //             this.state.direction[key] === 'asc'
    //                 ? a[key] > b[key]
    //                 : a[key] < b[key])),
    //         direction: {
    //             [key]: this.state.direction[key] === 'asc'
    //                 ? 'desc' : 'asc'
    //         }
    //     })
    // }
    handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:4000/profiles/${id}`,
            {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(response => {
                // eslint-disable-next-line no-undef
                const profiles = this.props.profiles.filter(profile => profile.id !== id)
                this.setState({
                    profiles
                })
            })

    }
    handleEdit(event) {

    }
    render() {

        return (
            <table id="students">
                <thead >
                    <tr >
                        <th>Employee_id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Gender</th>
                        <th>Email id</th>
                        <th>Password</th>
                        <th>DOB</th>
                        <th>Salary</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        this.props.profiles.map((profile, id) => (
                            <tr key={profile.id}>
                                <td>{profile.employee_id}</td>
                                <td>{profile.name}</td>
                                <td>{profile.username}</td>
                                <td>{profile.gender}</td>
                                <td>{profile.email}</td>
                                <td>{profile.password}</td>
                                <td>{profile.dob}</td>
                                <td>{profile.salary} $</td>
                                <td>{profile.company}</td>

                                <td><button className="edit" onClick={this.handleEdit.bind(this)}>Edit</button>
                                    <button className="delete" onClick={this.handleDelete.bind(this, id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

class Form extends Component {
    state = {
        name: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        // const response = await axios.get(`http://localhost:4000/profiles/${this.state.login}`)
        // const resp = response.data
        // this.setState({ profiles: resp }) // or this.setState({profiles})
        // this.props.onSubmit(resp);
        this.setState({ name: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="FormField" >
                <h3>Enter Employee LoginName and find his details</h3>
                <input type="text" className="FormInput__Field" name="name"
                    placeholder="Enter Employee name" value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })} />
                <button className="FormButton" >Search</button>

            </form >

        );
    }
}

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            redirect: false,
        };
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };
    componentDidMount() {
        this.getProfiles();
        if (this.state.redirect !== false)
            this.setState({ redirect: false })
    }
    getProfiles() {
        fetch("http://localhost:4000/profiles")
            .then(response => response.json())
            .then(response => this.setState({
                profiles: response.data
            }))
    }
    handleRedirect(value) {
        this.setState({ redirect: false })
    }

    btnClick() {
        console.log("button clicked");
        this.setState({ redirect: true })
    }
    handleButtonClick() {
        console.log(this.props, 'props')
        this.props.handleLoggedInStatus(false)
        // console.log( 'child working', handleLoggedInStatus )
        // this.props.handleLoggedInStatus(false)
    }
    render() {
        const { redirect } = this.state;
        return (
            <div>
                <div className="primary2">
                    <button className="primary" onClick={this.handleButtonClick.bind(this)}>Logout</button>
                </div>
                <div>
                    {
                        redirect === false ?
                            <div>
                                <div className="FormField1" >
                                    <button onClick={this.btnClick.bind(this)} className="FormButton" >
                                        + Add new Employee
                                    </button>

                                </div>
                                <Form onSubmit={this.addNewProfile}
                                />

                                <Table
                                    profiles={this.state.profiles}
                                    deleteRow={this.delete}
                                />
                            </div> : <div>
                                <Add
                                    getProfile={this.getProfiles}
                                    profiles={this.state.profiles}
                                    handleRedirect={this.handleRedirect.bind(this)} />
                            </div>
                    }
                </div>
            </div>
        );
    }
}