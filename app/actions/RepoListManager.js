import { cloneRemoteRepository } from '../services/rando';

export function installNewRepository(remoteUrl) {
  return (dispatch) => {
    // does repo exist already?
    // is it a valid URL
    dispatch({
      type: 'SET_IS_FETCHING_REPO',
      payload: true,
    });

    cloneRemoteRepository(remoteUrl)
      .then((repositories) => {
        dispatch({
          type: 'INSTALL_REPO',
          payload: repositories,
        });

        dispatch({
          type: 'SET_IS_FETCHING_REPO',
          payload: false,
        });

        return repositories;
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
