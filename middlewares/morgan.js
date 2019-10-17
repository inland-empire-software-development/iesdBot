const fs = require('fs');
const morgan = require('morgan');

module.exports = () => {

  const logDirectory = __dirname + '/../logs'

  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

  return morgan('combined', {
    stream: require('file-stream-rotator').getStream({
      filename: logDirectory + '/access-%DATE%.log',
      frequency: 'daily',
      verbose: false,
      date_format: 'YYYYMMDD'
    })
  });
}
