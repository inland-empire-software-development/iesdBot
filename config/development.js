if(process.env.DOCKER === 'DOCKER'){
  module.exports = {
    mongoURI: 'mongodb://iesdbot-mongo/IESDSlackTest'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/IESDSlackTest'
  }
}