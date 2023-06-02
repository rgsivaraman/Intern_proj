const { connect } = require('./db');

// ...

connect()
  .then(() => {
    // Start your Express.js server here
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

  const express = require('express');
  const tasksRouter = require('./routes/tasks');
  
  const app = express();
  
  // ...
  
  app.use('/tasks', tasksRouter);
  
  // ...
  