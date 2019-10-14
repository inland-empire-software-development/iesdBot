const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: {
    type: 'String',
    unique: true
  },
  // Store team member's Slack ID
  members: [
    {
      type: 'String',
      unique: true
    }
  ],
  // Whether the team is open, closed or invite-only
  status: {
    type: 'String'
  },
  // Date of event that team will be on
  dateOfEvent: {
    type: date,
    unique: true
  }
});

module.exports = mongoose.model('Team', teamSchema);