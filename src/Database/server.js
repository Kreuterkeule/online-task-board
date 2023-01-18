const sqlite3 = require('sqlite3').verbose();
const express = require('express');

var cors = require('cors');

const app = express();

app.use(cors({origin: true, credentials: true}))

class dbConnection {

  constructor() {
    this.location = '../../db/database.db';

    this.db = new sqlite3.Database( this.location, (err) => {
      if(err) {console.log( err )}

      console.log('> Databse Connection Established')
    } )
  }

  run( sql, res ) {
    this.db.run( sql, [], (err) => {
      if (err) {console.log(err);}
      console.log( sql )
      res.send( 'ok' );
    })
  }

  all( sql, res ) {
    this.db.all( sql, [], (err, rows) => {
      if(err) {
        console.error( err.message );
      }
      res.json( { model:rows } );
    })
  }
}

const dbCon = new dbConnection();

app.get( '/', (req, res) => {
  const sql = "SELECT * FROM user;";
  dbCon.all( sql, res );
} )

app.get( '/create/', (req, res) => {
  const sql = "INSERT INTO user (username, password) VALUES ( '" + JSON.parse(req.query.user).username + "', '" +  JSON.parse(req.query.user).password + "' )";
  dbCon.run( sql, res );
})

app.get( '/update/', (req, res) => {
  const sql = "UPDATE IIF( STRCMP('" + req.query.oldPassword + "', SELECT password WHERE username = '" + req.query.username + "') == 0) user SET password = '" + req.query.newPasword + "' WHERE username = '" + req.query.username + "' END IF";
  dbCon.run( sql, res );
})

app.get( '/delete/', (req, res) => {
  const sql = "DELETE FROM user WHERE username = '" + req.query.name + "' ";
  dbCon.run( sql, res );
})

// Todo Database

app.get( '/todo/get/', (req, res) => {
  const sql = "SELECT * FROM todos;";
  dbCon.all( sql, res );
} )

app.get( '/todo/create/', (req, res) => {
  const sql = "INSERT INTO todos (name, description, deadline, importance, involvedUsers, state) VALUES ( '" + JSON.parse(req.query.todo).name + "', '" +  JSON.parse(req.query.todo).description + "', '" +  JSON.parse(req.query.todo).deadline + "', '" +  JSON.parse(req.query.todo).importance + "', '" +  JSON.stringify(JSON.parse(req.query.todo).toggledUsers) + "', '" +  JSON.parse(req.query.todo).state + "' )";
  dbCon.run( sql, res );
})

app.get( '/todo/update/', (req, res) => {
  const sql = "UPDATE IIF( STRCMP('" + req.query.oldPassword + "', SELECT password WHERE username = '" + req.query.username + "') == 0) user SET password = '" + req.query.newPasword + "' WHERE username = '" + req.query.username + "' END IF";
  dbCon.run( sql, res );
})

app.get( '/todo/delete/', (req, res) => {
  const sql = "DELETE FROM todos WHERE name = '" + req.query.name + "' ";
  dbCon.run( sql, res );
})

app.listen( 3000, () => {
  console.log('> Express Listener Active on port 3000')
})
