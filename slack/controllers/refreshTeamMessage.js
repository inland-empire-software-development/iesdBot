const axios = require('axios');

// lib
const client = require('../../lib/redis');

// controllers
const generateTeamBlock = require('./generateTeamBlock');

const refreshTeamMessage = async (db, payload) => {
  const teamBlock = await generateTeamBlock(db, payload.user.id);

  const responseURL = await client.getResponseURL(payload.user.id);

  const allResponseURL = await client.getAllResponseURL();

  const allAxiosRequest = allResponseURL.map((responseURL) => {
    console.log(responseURL);
    return axios.post(responseURL, {
      replace_original: 'true',
      blocks: teamBlock
    });
  });

  // axios.post(responseURL, {
  //   replace_original: 'true',
  //   blocks: teamBlock
  // });

  axios.all(allAxiosRequest)
  .catch(err => {
    console.log('ERR', err);
  });
}

module.exports = refreshTeamMessage;