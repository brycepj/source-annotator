import React, { Component } from 'react';

export default class RepositoryList extends Component {
  render() {
    const { repositories } = this.props;

    return (
      <ul>
        { repositories.map((repo) => {
          return <li> {repo} </li>;
        }) }
      </ul>
    );
  }
}
