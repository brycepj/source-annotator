import { installFromRemote, removeRepo, getRepoListFromStore } from '../services/rando';

export function installNewRepository(remoteUrl) {
  return (dispatch) => {
    // does repo exist already?
    // is it a valid URL
    dispatch({
      type: 'SET_IS_FETCHING_REPO',
      payload: true,
    });

    installFromRemote(remoteUrl)
      .then((repo) => {
        dispatch({
          type: 'INSTALL_REPO',
          payload: repo,
        });

        dispatch({
          type: 'SET_IS_FETCHING_REPO',
          payload: false,
        });

        return repo;
      })
      .catch((err) => {
        dispatch({
          type: 'SET_REPO_INSTALL_ERROR',
          payload: true,
        });

        dispatch({
          type: 'SET_IS_FETCHING_REPO',
          payload: false,
        });
        console.error(err);
      });
  };
}

export function setRemoteInputValidity(isValid) {
  return (dispatch) => {
    dispatch({
      type: 'SET_REMOTE_INPUT_VALIDITY',
      payload: isValid,
    });

    dispatch({
      type: 'SET_REPO_INSTALL_ERROR',
      payload: false,
    });
  };
}

export function deleteRepository(repo) {
  return (dispatch) => {
    dispatch({
      type: 'SET_IS_DELETING_REPO',
      payload: true,
    });

    removeRepo(repo)
      .then(() => {
        dispatch({
          type: 'DELETE_REPO',
          payload: repo,
        });

        dispatch({
          type: 'SET_IS_DELETING_REPO',
          payload: false,
        });
      });
  };
}

export function initRepoList() {
  return (dispatch) => {
    getRepoListFromStore().then();
  };
}