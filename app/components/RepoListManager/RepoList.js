import React, { Component } from 'react';

export default class RepositoryList extends Component {
  dispatchDeleteRepo(repo) {
    this.props.deleteRepository(repo);
  }

  maybeShowDeletingRepoMessage() {
    return this.props.isDeletingRepo ? 'Is deleting repo' : '';
  }
  render() {
    const { repositories } = this.props;

    return (
      <div>
        <span> {this.maybeShowDeletingRepoMessage()} </span>
        <ul>
          { repositories.map((repo) =>
            <li key={repo.repoId}>
              {repo.repoName} ({repo.remoteUrl})
              <button onClick={this.dispatchDeleteRepo.bind(this, repo)}> Delete Repo </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
