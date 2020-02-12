import React from 'react';
export default function User(props) {

    return (
        <table className="rrr">
            <thead >
                <tr className="ddd">
                    <th>id</th>
                    <th>
                        <button onClick={() => props.sortBy('name')}>
                            Name
                          </button>
                    </th>
                    <th>Username</th>
                    <th>age</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody >
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.username}</td>
                            <td>{row.age}</td>
                            <td>{row.phone}</td>
                            <td>{row.company}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );

}