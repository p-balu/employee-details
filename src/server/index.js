const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }))
const SELECT_ALL_PROFILES_QUERY = 'SELECT *FROM profiles';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Balu$232530',
    database: 'sys',
    multipleStatements: true
});
connection.connect(err => {
    if (err) {
        return err;
    }
    else {
        console.log("connection success")
    }
});

app.use(cors());
app.get('/', (req, res) => {
    res.send('hello form product server')
});
app.get('/profiles', (req, res) => {
    connection.query(SELECT_ALL_PROFILES_QUERY, (err, results) => {
        if (err) {
            console.log(err)
            return res.send(err);
        }
        else {
            console.log("profiles entered")
            return res.json({
                data: results
            })
        }
    });
});
// app.post('/profiles/auth', function (request, response) {
//     var name = request.body.name;
//     var password = request.body.password;

//     connection.query('SELECT * FROM profiles WHERE name = ? AND password = ?', [name, password], function (error, results, fields) {
//         console.log(results.length)
//         if (results.length > 0) {
//             response.send('logged in')
//             // request.session.loggedin = true;
//             // request.session.name = name;
//             // response.redirect('/home');
//         } else {
//             response.send('Incorrect name and/or Password!');
//         }
//         response.end();
//     });

// });
app.post('/profiles', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    connection.query('SELECT * FROM profiles WHERE username = ?', [username], function (error, results, fields) {
        console.log(results.length);
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            console.log(results.length);
            if (results.length > 0) {
                if (results[0].password === password) {
                    res.send({
                        "code": 200,
                        data: results,
                        "success": "login sucessfull"
                    })
                }
                else {
                    res.send({
                        "code": 206,
                        "success": "Username and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "username does not exits"
                });
            }
        }
    });
})

app.post('/profiles/add', (req, res) => {
    const { employee_id, name, username, gender, password, email, dob, salary, company } = req.query;
    console.log("testing", email)
    const INSERT_PROFILES_QUERY = `INSERT INTO profiles
    (employee_id,name,username,gender,password,email,dob,salary,company)
     VALUES('${employee_id}','${name}','${username}','${gender}',
     '${password}','${email}','${dob}','${salary}','${company}')`;

    console.log("testing query", INSERT_PROFILES_QUERY)

    connection.query(INSERT_PROFILES_QUERY, (err, results) => {
        if (err) {
            console.log("error entered")
            console.log(err);
            return res.send({
                "code": 204,
                "success": err
            });
        }
        else {
            console.log(req.query);
            console.log("add entered")
            return res.send({
                "code": 200,
                "success": "added sucessfully"
            })
        }
    })
});

app.delete('/profiles/:employee_id', (req, res) => {
    connection.query('DELETE FROM profiles WHERE employee_id = ?', [req.params.employee_id], (err, results) => {
        if (!err) {
            console.log("entered delete")
            res.send(' Record deleted successfully.');
        }
        else {
            console.log("error entered")
            console.log(err);
            res.send(err)
        }
    })
});
app.put('/profiles/edit', (req, res) => {
    const { employee_id, name, username, gender, email, password, dob, salary, company } = req.query;
    const UPDATE_PROFILE_QUERY = "SET @employee_id = ?;SET @name = ?;SET @username = ?;SET @gender = ?;SET @email = ?; SET @password = ? ;SET @dob = ?;SET @salary = ?;SET @company = ?CALL ProfilesAddOrEdit(@employee_id,@name,@gender,@email,@password,@dob,@salary,@company);";
    connection.query(UPDATE_PROFILE_QUERY, [employee_id, name, username, gender, email, password, dob, salary, company], (err, results) => {
        if (!err) {
            console.log("Update entered")
            return res.send('Updated successfully');
        }
        else {
            console.log('error update entered');
            return res.send(err);
        }

    })
});
app.listen(4000, () => {
    console.log("server is working in port 4000");
});