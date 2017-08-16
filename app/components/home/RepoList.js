import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RepoList extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/repo-view"> reactjs</Link>
        </li>
      </ul>
    );
  }
}
