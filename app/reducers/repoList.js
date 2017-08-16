import { getRepositories, getSuppositories } from '../services/rando';

export default function repoList(state, action) {
  switch (action.type) {
    case 'DOWNLOAD_REPO':
      var repositories = getSuppositories();
      state.repositories = repositories;
      return state;
    default:
      return state;
  }
}
