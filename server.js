require('dotenv').config();

const express = require('express');
const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
const { createMessageAdapter } = require('@slack/interactive-messages');

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET);

const app = express();

const web = new WebClient(process.env.BOTS_TOKEN);

app.use('/events', slackEvents.requestListener());
app.use('/actions', slackInteractions.requestListener());

require('./slack/listeners/events')(slackEvents, web);
// require('./slack/listeners/interactions')(slackInteractions, web);

app.get('/', (req, res) => res.send('Server is working'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});