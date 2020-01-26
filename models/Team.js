const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Using the Schema constructor, create a new teamSchema object.
 * This outlines how the document will be stored in Mongo.
 */

const teamSchema = new Schema({
  teamName: {
    type: 'String',
    unique: true
  },
  teamOwner: {
    type: 'String',
    unique: true
  },
  // Store team member's Slack ID
  teamMembers: {
    type:[{
        type: 'String',
        unique: true
    }],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5']
  },
  // Whether the team is open, closed or invite-only
  teamSetting: {
    type: 'String'
  },
  // Date of event that team will be on
  dateOfEvent: {
    type: Date,
  }
});

function arrayLimit(val) {
  return val.length <= 5;
}

module.exports = mongoose.model('Team', teamSchema);