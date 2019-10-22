const { setupDB } = require('../../helpers/testSetup');
const axios = require('axios');

// Setup a test database
setupDB('iesdBot-team-model-testing');

it('Should save team to database', async done => {
  const res = await axios({
    method: 'post',
    url: '/actions',
    data: {
      actionId: 'create_team'
    }
  });

  console.log('res', res);
})