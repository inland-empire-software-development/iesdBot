const winston = require('winston');
require('winston-daily-rotate-file');

// Settings to create a new log file every day. Can be found in logs folder.
const transport = new (winston.transports.DailyRotateFile)({
  filename: __dirname + '/../logs/winston-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '5242880', // 5mb
  maxFiles: '5'
});

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  transports: [
    transport
  ],
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
}

module.exports = logger;