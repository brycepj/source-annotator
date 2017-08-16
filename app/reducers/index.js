import { combineReducers } from 'redux';

const isFetchingRepo = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_FETCHING_REPO':
      return action.payload;
  }
  return state;
};

const repositories = (state = [], action) => {
  switch (action.type) {
    case 'INSTALL_REPO':
      state.push(action.payload);
  }
  return state;
};

const remoteInputIsValid = (state = true, action) => {
  switch (action.type) {
    case 'SET_REMOTE_INPUT_VALIDITY':
      return action.payload;
  }
  return state;
};

const installErrorOccurred = (state = false, action) => {
  switch (action.type) {
    case 'SET_REPO_INSTALL_ERROR':
      return action.payload;
  }
  return state;

};

const rootReducer = combineReducers({
  repositories,
  isFetchingRepo,
  remoteInputIsValid,
  installErrorOccurred,
});

export default rootReducer;
