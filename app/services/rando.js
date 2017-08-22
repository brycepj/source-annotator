const path = require('path');
const uuid = require('uuid');

const { REPO_STORE_PATH } = require('./constants');
const { getHeadSHA, cloneRemoteRepo, removeRepoFromDisk } = require('./git');

const db = require('./db');

export function installFromRemote(remoteUrl) {
  const payload = { remoteUrl };
  return cloneRemoteRepo(payload)
    .then(makeRepo)
    .then(db.addRepo); // returns the fully initialized document
}

export function removeRepo(repo) {
  return removeRepoFromDisk(repo.repoPath);
}

function deriveRepoNameFromRemote(remoteRepoPath) {
  const projectFile = remoteRepoPath.split('/').slice(-1).pop();
  return projectFile.replace('.git', '');
}

function makeRepo(payload) {
  const repoName = deriveRepoNameFromRemote(payload.remoteUrl);
  const repoPath = path.resolve(REPO_STORE_PATH, repoName);
  const lastUpdated = new Date();
  const repoId = uuid.v1();

  Object.assign(payload, {
    id: repoId,
    name: repoName,
    path: repoPath,
    lastUpdated,
  });

  return getHeadSHA(payload);
}

export function getRepoListFromStore() {
  
}