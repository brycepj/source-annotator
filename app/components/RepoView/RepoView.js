import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RepoView extends Component {
  render() {
    return (
      <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>        
          <h1>Repo View</h1>
        <h2> { this.props.repo.name } </h2>
      </div>
    );
  }
};