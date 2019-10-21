require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const key = require('./config/keys');

// Loggers
const morgan = require('morgan');
const winston = require('./config/winston');

// Slack SDK
const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
const { createMessageAdapter } = require('@slack/interactive-messages');

const app = express();

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET);

const web = new WebClient(process.env.BOTS_TOKEN);

// Middlewares
app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));

// Listeners for Slack activities
app.use('/events', slackEvents.requestListener());
app.use('/actions', slackInteractions.requestListener());

// Register handlers for Slack activities
require('./slack/listeners/events')(slackEvents, web);
require('./slack/listeners/interactions')(slackInteractions, web);

app.get('/', (req, res) => res.send('Server is working'));

app.listen(process.env.PORT, () => {
  mongoose.connect(key.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, err => {
    if(err) console.log(err);
  })
  .then(() => {
    console.log('Database Ready!');
  });


  console.log(`Server is running on ${process.env.PORT}`);
});