import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as RepoViewActions from '../actions/RepoView';
import FileTree from '../components/RepoView/FileTree';

class RepoViewPage extends Component {
  componentWillMount() {
    const { match, initRepo } = this.props;

    initRepo(match.params.repoId);
  }

  render() {
    return (
      <div>
        <Link to='/'> HOME </Link>
        <FileTree fileTree={this.props.fileTree}/>
        <span> Repo View Page </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fileTree: state.fileTree,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initRepo: RepoViewActions.initRepository,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoViewPage);
