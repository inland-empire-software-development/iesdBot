const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Using the Schema constructor, create a new pendingTeamRequestSchema object.
 * This outlines how the document will be stored in Mongo.
 */

const pendingTeamRequestSchema = new Schema({
  teamName: {
    type: 'String',
  },
  // Slack ID of requesting user
  requestingUser: {
    type: 'String',
  },
  requestTimestamp: {
    type: 'String',
  }
});

module.exports = mongoose.model('PendingTeamRequest', pendingTeamRequestSchema);