const electron = require('electron');
const fs = require('fs-extra');
const path = require('path');
var shell = require('shelljs');
const directoryTree = require('directory-tree');
var isGitUrl = require('is-git-url');

      /* ... do something with data ... */
      // console.log(directoryTree('./repositories/react'));
export function cloneRemoteRepository() {
  return new Promise((resolve, reject) => {
    const remoteRepoPath = 'https://github.com/brycepj/monkeyface';
    const repoStorePath = path.resolve('./repositories', remoteRepoPath.split('/').slice(-1).pop());
    const cmd = `git clone ${remoteRepoPath} ${repoStorePath}`;

    shell.exec(cmd, (err) => {
      if (err) reject(err);
      resolve(remoteRepoPath);
    });
  });
}

