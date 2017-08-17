const path = require('path');
const uuid = require('uuid');

const { REPO_STORE_PATH } = require('./constants');
const { getHeadSHA, cloneRemoteRepo } = require('./git');

export function installFromRemote(remoteUrl) {
  const payload = { remoteUrl };

  return cloneRemoteRepo(payload)
    .then(makeRepo);
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
    repoId,
    repoName,
    repoPath,
    lastUpdated,
  });

  return getHeadSHA(payload);
}
