// API for accessing database -- methods should all return promise and handle their own errors

const RepoModel = require('../db/RepoModel');

export function getAllRepos() {
  const query = {};
  return RepoModel.find(query).exec()
    .catch((err) => logDbError('getting all repos', query, err));
}

export function getRepoById(repoId) {
  const query = {
    id: repoId,
  };

  return RepoModel.findOne({'details.id' : repoId })
    .catch((err) => logDbError('getting a single repo', query, err));
}

export function addRepo(query) {
  return RepoModel.create(query)
    .catch((err) => logDbError('adding a repo', query, err));
}

export function removeRepo(query) {
  return RepoModel.remove(query)
    .catch((err) => logDbError('removing a repo', query, err));
}

function logDbError(whileAction, config, err) {
  console.error(`
    ----------------------------------------
    DB Error!

    An error occurred while ${whileAction}.

    Query Config: 

    ${JSON.stringify(config)}

    Error:

    ${err}
    ---------------------------------------
  `);
}
