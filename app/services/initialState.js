// defines initialState for react app from DB
const db = require('./db');

module.exports = () => {
  return Promise.props({
    repositories: db.getAllRepos(),
  });
};
