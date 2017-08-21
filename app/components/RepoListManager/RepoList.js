import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to={`/repo/${repo.repoId}`}> {repo.repoName} </Link>
              <button onClick={this.dispatchDeleteRepo.bind(this, repo)}> Delete Repo </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
