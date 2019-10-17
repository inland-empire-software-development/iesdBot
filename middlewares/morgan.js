const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
// const createRotatingStream = require('file-stream-rotator').getStream

module.exports = () => {

  // fs.existsSync("../logs") || fs.mkdirSync("../logs")

  // const accesLogStream = createRotatingStream({
  //   filename: '../logs/access-%DATE%.log',
  //   frequency: 'daily',
  //   verbose: false,
  //   date_format: 'YYYYMMDD'
  // });

  // return morgan('combined', {
  //   stream: accesLogStream
  // });

  // return morgan('combined', {
  //   stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})
  // });
  const logDirectory = __dirname + '/../logs'

  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

  return morgan('combined', {
    stream: require('file-stream-rotator').getStream({
      filename: logDirectory + '/access-%DATE%.log',
      frequency: 'daily',
      verbose: false,
      date_format: 'YYYYMMDD'
    })
})
}