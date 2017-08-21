import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as RepoListManagerActions from '../actions/RepoListManager';
import RepoList from '../components/RepoListManager/RepoList';
import RepoInstaller from '../components/RepoListManager/RepoInstaller';


class RepoListManagerPage extends Component {
  render() {
    return (
      <div>
        <h1>hello from repolistmanager index component</h1>
        <RepoList 
          repositories={this.props.repositories} 
          deleteRepository={this.props.deleteRepository}
          isDeletingRepo={this.props.isDeletingRepo}
        />
        <RepoInstaller
          installErrorOccurred={this.props.installErrorOccurred}
          isFetchingRepo={this.props.isFetchingRepo}
          remoteInputIsValid={this.props.remoteInputIsValid}
          installNewRepository={this.props.installNewRepository}
          setRemoteInputValidity={this.props.setRemoteInputValidity}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
    isFetchingRepo: state.isFetchingRepo,
    isDeletingRepo: state.isDeletingRepo,
    remoteInputIsValid: state.remoteInputIsValid,
    installErrorOccurred: state.installErrorOccurred,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteRepository: RepoListManagerActions.deleteRepository,
    installNewRepository: RepoListManagerActions.installNewRepository,
    setRemoteInputValidity: RepoListManagerActions.setRemoteInputValidity,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoListManagerPage);
