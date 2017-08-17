import React, { Component } from 'react';

export default class RepositoryList extends Component {
  render() {
    const { repositories } = this.props;

    return (
      <ul>
        { repositories.map((repo) => {
          return <li key={repo.repoId}> {repo.repoName} ({repo.remoteUrl}) </li>;
        }) }
      </ul>
    );
  }
}

/**
 * 
 * 
 * headSHA
:
"8706c44539415a85a58d2f44c0a7c8ebb13f1d99↵"
lastUpdated
:
Wed Aug 16 2017 21:31:58 GMT-0400 (EDT)
remoteUrl
:
"https://github.com/brycepj/scrawl"
repoId
:
"dc680720-82eb-11e7-9cb2-532ff4749746"
repoName
:
"scrawl"
repoPath
:
"/Users/bryce/_repos/personal/source-annotator/repositories/scrawl"
 */