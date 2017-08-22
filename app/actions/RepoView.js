import { getRepoById } from '../services/db';
import { loadRepoTree } from '../services/RepoView';

export function initRepository(repoId) {
  return (dispatch) => {
    const repo = getRepoById(repoId).then((repo) => {
      const fileTree = loadRepoTree(repo.details.path);

      dispatch({
        type: 'LOAD_FILE_TREE',
        payload: fileTree,
      });
    });
  };
}