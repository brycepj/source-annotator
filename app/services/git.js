const { REPO_STORE_PATH } = require('./constants');

const shell = require('shelljs');

function shellAsync(cmd, cfg = {}) {
  return new Promise((resolve, reject) => {
    shell.exec(cmd, cfg, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout);
    });
  });
}

export function cloneRemoteRepo(payload) {
  const TMP_DELETE_REPOSITORIES = 'rm -rf ./*';
  const cmd = `cd ${REPO_STORE_PATH} && ${TMP_DELETE_REPOSITORIES} && git clone ${payload.remoteUrl}`;

  return shellAsync(cmd).then(() => payload);
}

export function getHeadSHA(payload) {
  const cmd = `cd ${payload.repoPath} && git rev-parse --verify HEAD`;

  return shellAsync(cmd).then((headSHA) => {
    return Object.assign(payload, {
      headSHA,
    });
  });
}
