export function isFetchingRepo (state = false, action) {
  return action.fetchingRepositories || state;
}

export function repositories (state = [], action) {
  return action.repositories || state;
}
