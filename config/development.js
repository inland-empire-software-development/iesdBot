console.log(process.env.DOCKER);
console.log(process.env.DOCKER === 'DOCKER');

if(process.env.DOCKER === 'DOCKER'){
  module.exports = {
    mongoURI: 'mongodb://iesdbot-mongo/IESDSlackTest'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/IESDSlackTest'
  }
}