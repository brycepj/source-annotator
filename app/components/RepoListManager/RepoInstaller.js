import React, { Component } from 'react';
import isGitUrl from 'is-git-url';
import styles from './RepoInstaller.css';

export default class RepoDownloader extends Component {
  constructor() {
    super();
    this.state = {
      remoteUrlInput: 'https://github.com/brycepj/scrawl',
      inputIsDirty: false,
    };
  }

  handleInputChange(e) {
    const currentInput = e.target.value;

    this.setState({
      remoteUrlInput: currentInput,
    });

    this.updateInputValidity(currentInput);
  }

  handleSubmit(e) {
    const rawRemoteInput = this.state.remoteUrlInput;

    if (this.props.remoteInputIsValid) {
      this.props.installNewRepository(rawRemoteInput);
    } else {
      this.setState({ inputIsDirty: true });
    }
  }

  maybeShowInstallErrorOccurred() {
    return this.props.installErrorOccurred ? 'Error occurred on install. Please check your credentials.' : '';
  }

  maybeShowFetchingMessage() {
    return this.props.isFetchingRepo ? 'I am loading' : '';
  }

  maybeShowInvalidMessage() {
    return !this.props.remoteInputIsValid && this.state.inputIsDirty ? 'This URL is not a valid git remote... please seee' : '';
  }

  updateInputValidity(rawInput) {
    const isValid = rawInput !== '' && isGitUrl(rawInput);
    return this.props.setRemoteInputValidity(isValid);
  }

  render() {
    return (
      <div>
        <h3>Provide Repo URL</h3>
        <div>
          <span className="error-message"> { this.maybeShowInstallErrorOccurred() }</span>
          <span className="error-message"> { this.maybeShowFetchingMessage() } </span>
          <span className="error-message"> { this.maybeShowInvalidMessage() } </span>
        </div>
        <input
          type="text"
          value={this.state.remoteUrlInput}
          onChange={this.handleInputChange.bind(this)}
          placeholder="e.g. https://github.com/facebook/react.git"
        />
        <button
          onClick={this.handleSubmit.bind(this)}
        >
          Import
        </button>
      </div>
    );
  }
}

/**
 * 
 *  see the existing list
 *  install repo
 *  see it in the list
 *  
 * 
 * 
 */