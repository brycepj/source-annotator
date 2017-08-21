import { loadRepoTree, getRepoById } from '../services/RepoView';

export function initRepository(repoId) {
  return (dispatch) => {
    const repo = getRepoById(repoId);

    const fileTree = loadRepoTree(repo.path);

    dispatch({
      type: 'LOAD_FILE_TREE',
      payload: fileTree,
    });
  };
}