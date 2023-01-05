const sqlite3 = require('sqlite3').verbose();
const express = require('express');

const app = express();

class dbConnection {

  constructor() {
    this.location = '../../db/database.db';

    this.db = new sqlite3.Database( this.location, (err) => {
      if(err) {console.log( err )}

      console.log('> Databse Connection Established')
    } )
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

app.listen( 3000, () => {
  console.log('> Express Listener Active on port 3000')
})
