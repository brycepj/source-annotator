// API for accessing database -- methods should all return promise and handle their own errors

const RepoModel = require('../db/RepoModel');

export function getAllRepos() {
  const config = {};
  return RepoModel.find(config).exec()
    .catch((err) => logDbError('getting all repos', config, err));
}

export function addRepo(config) {
  return RepoModel.create(config)
    .catch((err) => logDbError('adding a repo', config, err));
}

export function removeRepo(config) {
  return RepoModel.remove(config)
    .catch((err) => logDbError('removing a repo', config, err));
}

function logDbError(whileAction, config, err) {
  console.error(`
    ----------------------------------------
    DB Error!

    An error occurred while ${whileAction}.

    Query Config: 

    ${config}

    Error:

    ${err}
    ---------------------------------------
  `);
}
