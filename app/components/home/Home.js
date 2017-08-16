// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import RepoList from './RepoList';
import RepoDownloader from './RepoDownloader';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Repositories</h2>
          <RepoList />
          <RepoDownloader/>
          {/* <Link to="/counter">to Counter</Link> */}
        </div>
      </div>
    );
  }
}
