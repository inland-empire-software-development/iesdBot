require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const key = require('./config/keys');
const morgan = require('morgan');
const fs = require('fs');

const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
const { createMessageAdapter } = require('@slack/interactive-messages');

//middlewares
const logger = require('./middlewares/morgan');

const app = express();

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET);

const web = new WebClient(process.env.BOTS_TOKEN);

app.use(helmet());
app.use(logger());
app.use('/events', slackEvents.requestListener());
app.use('/actions', slackInteractions.requestListener());

require('./slack/listeners/events')(slackEvents, web);
require('./slack/listeners/interactions')(slackInteractions, web);

app.get('/', (req, res) => res.send('Server is working'));

app.listen(process.env.PORT, () => {
  mongoose.connect(key.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if(err) console.log(err);
  })
  .then(() => {
    console.log('Database Ready!');
  });


  console.log(`Server is running on ${process.env.PORT}`);
});