const express = require('express');
const handleDisplayTeam = require('../controllers/handleDisplayTeam');
const Team = require('../../models/Team');

module.exports = (app, web) => {
  app.use('/hackday', express.urlencoded({ extended: true }));
  app.use('/hackday', express.json());

  // Slack Node SDK doesn't support slash commands
  // Manually created route for handling /hackday slash command
  app.post('/hackday', (req, res) => {
    // Send message to user
    handleDisplayTeam(web, Team, {user: req.body.user_id});
  
    // Empty response so no error is displayed
    res.json();
  });
}