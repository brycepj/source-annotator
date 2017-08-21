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
  const cmd = `cd ${REPO_STORE_PATH} && git clone ${payload.remoteUrl}`;

  return shellAsync(cmd).then(() => payload);
}

export function getHeadSHA(payload) {
  const cmd = `cd ${payload.path} && git rev-parse --verify HEAD`;

  return shellAsync(cmd).then((headSHA) => {
    return Object.assign(payload, {
      headSHA,
    });
  });
}

export function removeRepoFromDisk(repoPath) {
  return shellAsync(`rm -rf ${repoPath}`);
}
