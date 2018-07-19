'use strict';

const pg = require('pg');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the client connection to the DB
const connectionString = process.env.POSTGRES ||
  'postgres://postgres:postgres@localhost:5432/postgres';

const client = new pg.Client(connectionString);
client.connect();

initializeDatabase();

// Middleware!
app.use(express.static('./public')); // serve static files from public folder
app.use(express.json()); // parse body that's JSON
app.use(express.urlencoded({ extended: true })); // parsed the form body name=John&age=12

// Base route for serving up HTML
app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

// CRUD Routes!

// Create
app.post('/db/person', (request, response, next) => {
  client.query(`
    INSERT INTO persons (name, age, ninja)
    VALUES ($1, $2, $3);
  `, [
    request.body.name,
    request.body.age,
    request.body.ninja
  ])
    .then(() => {
      response.redirect('/');
    })
    .catch(next);
});

// Read
app.get('/db/person', (request, response, next) => {
  client.query('SELECT * FROM persons;')
    .then((data) => {
      response.send(data);
    })
    .catch(next);
});

// Update

// Delete

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function initializeDatabase() {
  client.query(`
    CREATE TABLE IF NOT EXISTS persons (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      age INTEGER,
      ninja BOOLEAN
    )
  `)
    .then((response) => {
      // console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
}