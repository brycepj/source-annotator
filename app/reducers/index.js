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
      break;
    case 'DELETE_REPO':
      removeItemByKey(state, action.payload, 'repoId');
      break;
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

const isDeletingRepo = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_DELETING_REPO':
      return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  repositories,
  isFetchingRepo,
  isDeletingRepo,
  remoteInputIsValid,
  installErrorOccurred,
});

function removeItemByKey(arr, obj, key) {
  const index = arr.find((item) => {
    return obj[key] === item[key];
  });

  arr.splice(index, 1);
}

export default rootReducer;
